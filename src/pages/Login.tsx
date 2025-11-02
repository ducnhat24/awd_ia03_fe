// src/pages/Login.tsx
import { useForm } from 'react-hook-form'
import { toast } from 'sonner' // Dùng để hiển thị thông báo

// Import các components của shadcn/ui
import { Button } from '../components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../components/ui/form'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../components/ui/card'
import { Input } from '../components/ui/input'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

// (Không cần Zod vì chúng ta chỉ mô phỏng, nhưng vẫn có thể dùng nếu muốn)

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm() // Form đơn giản

    // Hàm xử lý submit (mô phỏng) [cite: 39]
    function onLoginSubmit() {
        setIsLoading(true)
        // Giả lập việc gọi API mất 1.5 giây
        setTimeout(() => {
            setIsLoading(false)
            // Hiển thị thông báo thành công giả [cite: 39]
            toast.success('Đăng nhập thành công! (Mô phỏng)')
            form.reset()
        }, 1500)
    }

    return (
        <div className="flex justify-center pt-10">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Đăng Nhập</CardTitle>
                    <CardDescription>
                        Chào mừng trở lại.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Form UI cho Đăng nhập [cite: 37] */}
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onLoginSubmit)}
                            className="space-y-6"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="example@email.com"
                                                {...field}
                                                type="email"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mật khẩu</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="******"
                                                {...field}
                                                type="password"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    'Đăng Nhập'
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
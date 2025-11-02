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


export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm() // Form đơn giản

    function onLoginSubmit() {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            toast.success('Đăng nhập thành công! (Mô phỏng)')
            form.reset()
        }, 1500)
    }

    return (
        // full-bleed wrapper so the login section spans the viewport width
        <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
            <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Đăng Nhập</CardTitle>
                        <CardDescription>
                            Chào mừng trở lại.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
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
                                <Button
                                    type="submit"
                                    variant="default"
                                    className="w-full !bg-blue-600 !text-white hover:!bg-blue-700"
                                    disabled={isLoading}
                                >
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
        </div>
    )
}
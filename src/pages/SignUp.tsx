// src/pages/SignUp.tsx
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import axios, { AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

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
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
    email: z.string().email({ message: 'Email không hợp lệ.' }),
    password: z
        .string()
        .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự.' }),
})

type UserRegistrationData = z.infer<typeof formSchema>

type ApiErrorResponse = {
    message: string
}

const registerUser = async (data: UserRegistrationData) => {
    const { data: response } = await axios.post(
        'http://localhost:3000/user/register',
        data,
    )
    return response
}

export default function SignUpPage() {
    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            toast.success('Đăng ký thành công! Vui lòng đăng nhập.')
            form.reset()
        },
        onError: (error: AxiosError) => {
            let errorMessage = 'Đã xảy ra lỗi. Vui lòng thử lại.'
            if (error.response?.data) {
                errorMessage = (error.response.data as ApiErrorResponse).message
            }
            toast.error(errorMessage)
        },
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        mutation.mutate(values)
    }

    return (
        <div className="flex justify-center pt-10">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Đăng Ký</CardTitle>
                    <CardDescription>
                        Tạo tài khoản mới để bắt đầu.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                            <Button type="submit" className="w-full" disabled={mutation.isPending}>
                                {mutation.isPending ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    'Đăng Ký'
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
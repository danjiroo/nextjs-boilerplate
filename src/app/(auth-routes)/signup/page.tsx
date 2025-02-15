'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { MailIcon, UserIcon, LockIcon } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  email: z
    .string()
    .nonempty('Email Address is required.')
    .email({ message: 'Invalid Email.' }),
  username: z.string().nonempty('Username is required.').min(6, {
    message: 'Username must be at least 6 characters.',
  }),
  password: z.string().nonempty('Password is required.').min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

const Signup: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('onSubmit signup:', values);
  };

  return (
    <Card className="w-full p-10 border-0 shadow-none md:w-[600px] md:h-[600px]">
      <CardHeader>
        <h2 className="text-4xl pb-2">Create A New Account</h2>
        <p>Create new account:</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter email..."
                      iconStart={<MailIcon className="text-zinc-400" />}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter username..."
                      iconStart={<UserIcon className="text-zinc-400" />}
                      {...field}
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
                  <FormLabel className="font-bold">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter password..."
                      iconStart={<LockIcon className="text-zinc-400" />}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Form>
        <CardContent className="p-6 text-center">
          <p>
            Already registered?{' '}
            <Link href={'/login'} className="text-primary font-bold">
              Login with your account
            </Link>
          </p>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default Signup;

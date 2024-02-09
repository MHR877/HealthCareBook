import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import AuthLayout from "@/components/AuthLayout";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email("must be an email."),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <AuthLayout>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-base">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="border-[#10217d] text-base h-12"
                      placeholder="Email"
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
                <FormItem className="w-full">
                  <FormLabel className="text-base">password</FormLabel>
                  <FormControl>
                    <Input
                      className="border-[#10217d] text-base h-12"
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#10217d] text-xl font-bold py-6 hover:bg-[#0b1b72] !mt-8"
            >
              Submit
            </Button>
          </form>
        </Form>
        <div className="mt-6 flex gap-1">
          <p>Do you not have an account?</p>
          <Link to="/auth/register" className="text-[#10217d]">
            Register now
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;

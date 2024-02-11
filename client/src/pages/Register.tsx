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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import AuthLayout from "@/components/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loading from "@/components/shared/Loading";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "lastname must be at least 2 characters.",
  }),
  email: z.string().email("must be an email."),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  passwordConfirm: z.string(),
  type: z.string(),
  doctor: z.string().optional(),
});

function Register() {
  const [type, setType] = useState("patient");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      type: "",
      doctor: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);

      const {
        firstname,
        lastname,
        email,
        password,
        passwordConfirm,
        type,
        doctor,
      } = values;

      setIsLoading(true);
      const res = await axios.post("http://localhost:3000/api/v1/register", {
        firstname,
        lastname,
        email,
        password,
        passwordConfirm,
        type,
        doctor,
      });      

      console.log(res);
      navigate("/");
    } catch (error) {
      setError(true);
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <>
      {isLoading && <Loading />}
      <AuthLayout>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="flex gap-6">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-base">First name</FormLabel>
                      <FormControl>
                        <Input
                          className="border-[#10217d] text-base h-12"
                          placeholder="First name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-base">Last name</FormLabel>
                      <FormControl>
                        <Input
                          className="border-[#10217d] text-base h-12"
                          placeholder="Last name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base">
                      Confirm your password
                    </FormLabel>
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
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base">Who are you ?</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(e) => {
                          setType(e);
                          field.onChange(e);
                        }}
                        defaultValue={"patient"}
                        name="type"
                      >
                        <FormControl>
                          <SelectTrigger className="text-base h-11 border-[#10217d] text-[#10217d]">
                            <SelectValue placeholder="Select the type you are" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="doctor">Doctor</SelectItem>
                          <SelectItem value="patient">Patient</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {type === "doctor" && (
                <FormField
                  control={form.control}
                  name="doctor"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-base">
                        Whats type of doctor you are ?
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={"Dentist"}
                        >
                          <FormControl>
                            <SelectTrigger className="text-base h-11 border-[#10217d] text-[#10217d]">
                              <SelectValue placeholder="Select the type you are" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="General Practitioner">
                              General Practitioner (GP)
                            </SelectItem>
                            <SelectItem value="Cardiologist">
                              Cardiologist
                            </SelectItem>
                            <SelectItem value="Dermatologist">
                              Dermatologist
                            </SelectItem>
                            <SelectItem value="Pediatrician">
                              Pediatrician
                            </SelectItem>
                            <SelectItem value="Obstetrician/Gynecologist">
                              Obstetrician/Gynecologist (OB/GYN)
                            </SelectItem>
                            <SelectItem value="Orthopedic Surgeon">
                              Orthopedic Surgeon
                            </SelectItem>
                            <SelectItem value="Neurologist">
                              Neurologist
                            </SelectItem>
                            <SelectItem value="Psychiatrist">
                              Psychiatrist
                            </SelectItem>
                            <SelectItem value="Ophthalmologist">
                              Ophthalmologist
                            </SelectItem>
                            <SelectItem value="ENT Specialist">
                              ENT Specialist (Ear, Nose, and Throat)
                            </SelectItem>
                            <SelectItem value="Oncologist">
                              Oncologist
                            </SelectItem>
                            <SelectItem value="Dentist">Dentist</SelectItem>
                            <SelectItem value="Radiologist">
                              Radiologist
                            </SelectItem>
                            <SelectItem value="Endocrinologist">
                              Endocrinologist
                            </SelectItem>
                            <SelectItem value="Gastroenterologist">
                              Gastroenterologist
                            </SelectItem>
                            <SelectItem value="Urologist">Urologist</SelectItem>
                            <SelectItem value="Allergist/Immunologist">
                              Allergist/Immunologist
                            </SelectItem>
                            <SelectItem value="Hematologist">
                              Hematologist
                            </SelectItem>
                            <SelectItem value="Oncology Nurse">
                              Oncology Nurse
                            </SelectItem>
                            <SelectItem value="Physical Therapist">
                              Physical Therapist
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <Button
                type="submit"
                className={`w-full bg-[#10217d] text-xl font-bold py-6 hover:bg-[#0b1b72] !mt-8 ${
                  error ? "bg-red-600 hover:bg-red-700" : ""
                }`}
              >
                Submit
              </Button>
            </form>
          </Form>
          {error && (
            <p className="text-red-400 text-md">Somthing been wrong.</p>
          )}
          <div className="mt-6 flex gap-1">
            <p>Do you have an account?</p>
            <Link to="/auth/login" className="text-[#10217d]">
              Login now
            </Link>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}

export default Register;

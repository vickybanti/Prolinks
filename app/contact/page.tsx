"use client"
import React, { useRef, useState } from 'react'
import {motion} from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import emailjs from "@emailjs/browser";
import { Textarea } from '@/components/ui/textarea'

 
const formSchema = z.object({
    email: z.string().email(),
    text: z.string().min(2, {
      message: "message must be at least 2 characters.",
    }),

  })
   
const page = () => {
     const ref = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState("");
      
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          text:""
        },
      })
    function onSubmit(values: z.infer<typeof formSchema>) {
       
       
      
          if (ref.current) {
            emailjs
              .sendForm(
                "service_bqlyqeq",
                "template_5yyxifj",
                ref.current,
                "U2D7hh_TfmUqWH5qi"
              )
              .then(
                (result) => {
                  setSuccess("Message sent successfully");
                },
                (error) => {
                  setSuccess(error.text);
                }
              );
          }
    console.log(values)
  }

  return (
    <motion.div 
    initial={{ x: -30, opacity: 0.2 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 1.5 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false }}>
        <div className='flex flex-col w-full'>
       <h1 className='text-5xl text-white'> Contact us! </h1>
        </div>

         <motion.div 
                         initial={{ y: -30, opacity: 0.2 }}
                         animate={{ y: 0, opacity: 1 }}
                         transition={{ ease: "easeInOut", duration: 1.5 }}
                         whileInView={{ opacity: 1 }}
                         viewport={{ once: false }} className="bg-black flex justify-between items-center gap-4">
                    <div className="w-1/2 h-full p-32 items-center ">
        <h1 className="text-[#A08C5B] text-5xl py-3">Contact us</h1>
        <div className="flex items-center]">
              
           <img src=" https://img.icons8.com/?size=100&id=107436&format=png&color=000000" 
           width="32px"
           height="2px"
           className="object-contain"/>
           <p className="text-xs text-white p-3 font-light cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#A08C5B] hover:text-black">
           
            13, Dayo Kuyeclose,New Oko-oba, Abulegba, Lagos
            </p>
            </div>
            <div className="flex items-center]">
              
              <img src="https://img.icons8.com/?size=100&id=12921&format=png&color=000000"
              width="32px"
              height="2px"
              className="object-contain"/>
            <p className="py-2 text-sm text-white">0803-302-9830</p>
            </div>

            <div className="flex items-center]">
              
           <img src=" https://img.icons8.com/?size=100&id=OumT4lIcOllS&format=png&color=000000" 
           width="32px"
           height="2px"
           className="object-contain"/>
            <p className="py-2 text-sm text-white">tundeadekola@yahoo.com</p>
            </div>
          </div>
        <div className="justify-end w-1/2 overflow-hidden h-full  px-32 py-40 bg-[#A08C5B] mr-10">

        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email address" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit">Submit</Button>
        {success && <p className='text-white'>Message successfully sent</p>}
      </form>
    </Form>
        
                   
                  </div>
                  </motion.div>

    </motion.div>
  )
}

export default page
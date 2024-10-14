"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSheetData } from "@/src/actions/google-sheets.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useModal } from "@/src/context/modal";
// import { Calendar } from "@/components/ui/calendar";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z
    .string()
    .min(5, { message: "Email should provided." })
    .email({ message: "Please give valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Invalid Number!" })
    .max(10, { message: "Invalid Number!" })
    .regex(phoneRegex, "Invalid Number!"),

  course: z.string().min(2).max(50),

});
export default function SeminarSticky() {
  // const [date, setDate] = useState();
  const { isModalOpen, setIsModalOpen, modalHeading, setModalHeading } =
    useModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
    },
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await getSheetData(values);
    if (res.status) {
      toast.success("We will get to you soon");
    } else {
      toast.error("Something went wrong! Please try again later");
    }
    setIsModalOpen(false);
  }

  function onClickHandler() {
    setModalHeading("Register now and consult with the team");
    setIsModalOpen(true);
  }

  return (
    <div className="flex flex-col text-primary p-4 text-center space-y-2 z-50 ]">

      <Dialog
        open={isModalOpen}
        onOpenChange={(value) => setIsModalOpen(value)}
      >
        <DialogTrigger asChild onClick={onClickHandler}>
          <Button className="self-center  bg-white hover:bg-white text-[#311100] font-semibold px-6 xl:py-6 lg:py-5 rounded-full border-[#789] border-[2px] shadow-none lg:text-xl">Register</Button>
        </DialogTrigger>
        <DialogContent className="bg-white rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary font-bricolage">
              {modalHeading}
            </DialogTitle>
            {/* <DialogDescription>
              Register now and consult with the team
            </DialogDescription> */}
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="text-base text-primary py-6 px-4"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="text-base text-primary py-6 px-4"
                        placeholder="Enter your emailID"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input
                        className="text-base text-primary py-6 px-4"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Calendar */}
              {/*   mode="single" */}
              {/*   selected={date} */}
              {/*   onSelect={setDate} */}
              {/*   className="rounded-md border" */}
              {/* /> */}
              <DialogFooter>
                <Button className="self-center w-full bg-o hover:bg-o" onClick={() => onSubmit}>
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

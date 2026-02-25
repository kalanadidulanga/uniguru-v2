"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/myComponents/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { STUDY_DESTINATIONS, STUDY_DESTINATIONS_v2 } from "@/constants/data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getPartnerCodes } from "@/actions/superAdmin/partners";
import { submitQuestionnaire } from "@/actions/studentquestionnaire";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { getIntakes, getIntakesForClient } from "@/actions/superAdmin/intakes";

const formSchema = z.object({
  agentcode: z.string().optional(),
  country: z.string().optional(),
  name: z.string({ required_error: "Name is required" }).min(3),
  email: z.string({ required_error: "Email is required" }).email(),
  mobile: z.string({ required_error: "Mobile is required" }).min(10),
  dob: z.string({ required_error: "Date of Birth is required" }).min(10, {
    message: "Date of Birth is required",
  }),
  intakeId: z.number({ required_error: "Intake is required" }),
  courselevel: z.string({ required_error: "Course Level is required" }).min(1, {
    message: "Course Level is required",
  }),
  subject: z.string({ required_error: "Subject is required" }).min(1, {
    message: "Subject is required",
  }),
  olenglish: z.string({ required_error: "OL English result is required" }),
  alenglish: z.string({ required_error: "AL English result is required" }),
  ieltsorpte: z.string({ required_error: "Required" }),
  academicqulification: z.string({ required_error: "Required" }).min(1, {
    message: "Required",
  }),
  finalgradeforhighestqualification: z.string().optional(),
  gapmorethanthreemonthsoncv: z.string({ required_error: "Required" }),
  Doyouhaveatleast2millionLKR: z.string().optional(),
  doyouhavepreviousvisarefusal: z.string({ required_error: "Required" }),
  whatisyourcurrentrelationshipstatus: z.string({ required_error: "Required" }),
  areyouplanningtobringdependents: z.string({ required_error: "Required" }),
});

const StudentQuestionnaire = () => {
  const searchParams = useSearchParams();
  const [partnerCodes, setPartnerCodes] = useState<any>([]);
  const [intakes, setIntakes] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const router = useRouter();

  // 1. Define your form with react-hook-form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agentcode: "", // Make sure this has a default value
      country: "", // Add default value to avoid undefined
      name: "", // Add default value to avoid undefined
      email: "",
      mobile: "",
      dob: "",
      subject: "",
      academicqulification: "",
    },
  });

  // 2. UseEffect to get agentCode from URL and set it in the form
  useEffect(() => {
    const loadPartnerCodes = async () => {
      try {
        const res = await getPartnerCodes();
        if (res) {
          setPartnerCodes(res);
        }

        const res2 = await getIntakesForClient();
        if (res2) {
          setIntakes(res2);
        }
      } catch (error) {
        console.error("Error loading partner codes or intakes", error);
      }

      // Capture agent code from the URL search params
      const agentCodeFromUrl = searchParams.get("userid") || "";

      // Set agent code in the form if it exists
      if (agentCodeFromUrl) {
        console.log("Agent code from URL:", agentCodeFromUrl);
        form.setValue("agentcode", agentCodeFromUrl);
        setIsDisabled(true); // Disable the agent code field after setting it
      }
    };

    // Load partner codes and intakes on mount
    loadPartnerCodes();
  }, [searchParams, form]);

  // 3. Define the submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // Capture agent code from the URL search params
    const agentCodeFromUrl = searchParams.get("userid") || "";

    const data = {
      ...values,
      agentcode: agentCodeFromUrl || values.agentcode || null,
    };

    console.log(data);

    try {
      setIsLoading(true);
      const res = await submitQuestionnaire(data);
      if (res) {
        Swal.fire(
          "Success",
          "Questionnaire submitted successfully",
          "success"
        ).then(() => {
          router.push("/");
        });
        // toast.success("Questionnaire submitted successfully");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-liter-orange flex flex-col flex-1 items-center px-3 py-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-2xl gap-5"
        >
          <div className="bg-white shadow-md rounded-lg flex flex-col w-full items-center justify-center p-5">
            <Image src={"/logo2.png"} alt="UNIGURU" width={300} height={200} />
            <h3 className="text-3xl font-bold mt-5 text-center md:text-4xl text-my-blue">
              Uniguru Student Questionnaire
            </h3>
          </div>

          {/* Form field for Agent Code */}
          <FormField
            control={form.control}
            name="agentcode"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                {/* <FormLabel>
                  Please enter the User Id provided to you by your counselor
                </FormLabel> */}
                <Select
                  disabled={isDisabled}
                  onValueChange={(value) => field.onChange(value)}
                  value={field.value || ""} // Ensure field.value has a fallback value
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="User Id" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {partnerCodes.map((code: any, index: number) => (
                      <SelectItem key={index} value={code.partnerCode}>
                        {code.partnerCode}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value)}
                  value={field.value || ""} // Ensure field.value has a fallback value
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {STUDY_DESTINATIONS_v2.map((destination, index) => (
                      <SelectItem key={index} value={destination.name}>
                        {destination.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What is your name? <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    {...field} // This will handle value and onChange automatically
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
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What is your email address?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Email"
                    {...field} // This will handle value and onChange automatically
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What is your mobile number?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Mobile Number"
                    {...field} // This will handle value and onChange automatically
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What is your date of birth?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    className=" max-w-56 flex"
                    {...field} // This will handle value and onChange automatically
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="intakeId"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What intake are you interested in?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    className="flex flex-col space-y-1"
                  >
                    {intakes?.map((intake: any, index: number) => (
                      <FormItem
                        key={index}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={intake.id} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {intake.name}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="courselevel"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What is the course level you are interested in?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Foundation Program" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Foundation Program
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Bachelor Program" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Bachelor Program
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Bachelor Top-Up Program" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Bachelor Top-Up Program
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Masters Program" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Masters Program
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Master's by Research/PhD Programs" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Master&apos;s by Research/PhD Programs
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What is the subject that you are interested in?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter subject"
                    {...field} // This will handle value and onChange automatically
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="olenglish"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What is your O/L English subject result?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="A" />
                      </FormControl>
                      <FormLabel className="font-normal">A</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="B" />
                      </FormControl>
                      <FormLabel className="font-normal">B</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="C" />
                      </FormControl>
                      <FormLabel className="font-normal">C</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="D" />
                      </FormControl>
                      <FormLabel className="font-normal">D</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="S" />
                      </FormControl>
                      <FormLabel className="font-normal">S</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="W or F" />
                      </FormControl>
                      <FormLabel className="font-normal">W or F</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="alenglish"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What is your A/L English subject result?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="A" />
                      </FormControl>
                      <FormLabel className="font-normal">A</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="B" />
                      </FormControl>
                      <FormLabel className="font-normal">B</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="C" />
                      </FormControl>
                      <FormLabel className="font-normal">C</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="S" />
                      </FormControl>
                      <FormLabel className="font-normal">S</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="F" />
                      </FormControl>
                      <FormLabel className="font-normal">F</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ieltsorpte"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  Have you sat for an English exam such as IELTS or PTE in the
                  last 2 years? <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="No" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="academicqulification"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What is your highest academic qualification and when was it
                  awarded? <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Academic Qualification"
                    {...field} // This will handle value and onChange automatically
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="finalgradeforhighestqualification"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What was the final grade awarded for your highest academic
                  qualification?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="General Pass" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        General Pass
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="2nd Lower" />
                      </FormControl>
                      <FormLabel className="font-normal">2nd Lower</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="2nd Upper" />
                      </FormControl>
                      <FormLabel className="font-normal">2nd Upper</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="1st Class" />
                      </FormControl>
                      <FormLabel className="font-normal">1st Class</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gapmorethanthreemonthsoncv"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  Do you have gaps of more than 3 months on your CV?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="No" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Doyouhaveatleast2millionLKR"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  Do you have at least 2.5 million LKR for University fees
                  available immediately ?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="No" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="doyouhavepreviousvisarefusal"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  Do you have previous visa refusals from any country?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="No" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatisyourcurrentrelationshipstatus"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  What is your current relationship status?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Single" />
                      </FormControl>
                      <FormLabel className="font-normal">Single</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Married" />
                      </FormControl>
                      <FormLabel className="font-normal">Married</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="areyouplanningtobringdependents"
            render={({ field }) => (
              <FormItem className="bg-white shadow-md rounded-lg flex flex-col w-full justify-center p-5 gap-2">
                <FormLabel>
                  Are you planning to bring dependents?{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="No" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit button */}
          <Button
            type="submit"
            variant={"blue2"}
            size={"lg"}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

// Wrap in Suspense in the parent or higher-level component
const SuspendedStudentQuestionnaire = () => (
  <Suspense fallback={<div>Loading form...</div>}>
    <StudentQuestionnaire />
  </Suspense>
);

export default SuspendedStudentQuestionnaire;

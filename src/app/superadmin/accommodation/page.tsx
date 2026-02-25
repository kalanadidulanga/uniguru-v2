"use client";

import {
  addNewAccommodation,
  getAccommodationList,
} from "@/actions/superAdmin/accommodation";
import { getCountryList } from "@/actions/superAdmin/countryList";
import { Button } from "@/components/myComponents/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import DataTable from "./DataTable";

const Accommodation = () => {
  const [countryList, setCountryList] = useState<any[]>([]);
  const [accommodationList, setAccommodationList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<{
    id: string;
    name: string;
  }>({
    id: "",
    name: "",
  });

  const loadAccommodation = async () => {
    setIsLoading(true);
    const selectedCountryId = parseInt(selectedCountry?.id);
    try {
      const res = await getAccommodationList(
        selectedCountryId && selectedCountryId
      );
      if (res) {
        console.log(res);
        setAccommodationList(res);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadAccommodation();
  }, [selectedCountry]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const res = await getCountryList();
        if (res) {
          // console.log(res);
          setCountryList(res);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadCountries();
  }, []);

  return (
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold">Accommodation List</h5>
        <div className=" flex items-center gap-3">
          <Select
            onValueChange={(value) => {
              const country = countryList.find((item) => item.id === value);
              // console.log(country);
              if (country) {
                setSelectedCountry({ id: country.id, name: country.name });
              }
            }}
            value={selectedCountry.id}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {countryList?.map((item: any) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <AddAccommodation
            countryList={countryList}
            reload={loadAccommodation}
          />
        </div>
      </div>
      <div className=" w-full h-auto my-5">
        <DataTable
          data={accommodationList}
          reload={loadAccommodation}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

const AddAccommodation = ({
  countryList,
  reload,
}: {
  countryList: any[];
  reload: () => void;
}) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<{
    id: string;
    name: string;
  }>({
    id: "",
    name: "",
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    // Ensure the selected country ID is included in the form data
    formData.set("countryId", selectedCountry.id);
    formData.set("countryName", selectedCountry.name);

    const dataObj = Object.fromEntries(formData.entries());

    if (
      !dataObj.name ||
      !dataObj.countryId ||
      !dataObj.src ||
      !dataObj.desc ||
      !dataObj.location ||
      !dataObj.price
    ) {
      toast.error("All fields are required");
      setIsLoading(false);
      return;
    }

    try {
      const newDataSet = {
        destinationId: parseInt(dataObj?.countryId as string),
        src: dataObj.src,
        name: dataObj.name,
        desc: dataObj.desc,
        location: dataObj.location,
        price: dataObj.price,
      };
      console.log(newDataSet);
      // You would typically send the data to your backend here

      const res = await addNewAccommodation(newDataSet);
      if (res) {
        toast.success("Accommodation added successfully");
        reload();
        if (formRef.current) {
          formRef.current.reset();
        }
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="blue2" size="sm">
          New Accommodation
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-4xl">
        <DialogHeader>
          <DialogTitle>Add new accommodation</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-2 mt-3 gap-3"
          ref={formRef}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="country">Country</Label>
            <Select
              onValueChange={(value) => {
                const country = countryList.find((item) => item.id === value);
                // console.log(country);
                if (country) {
                  setSelectedCountry({ id: country.id, name: country.name });
                }
              }}
              value={selectedCountry.id}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                {countryList?.map((item: any) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Title</Label>
            <Input
              type="text"
              name="name"
              placeholder="Accommodation name"
              className="w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="src">Src</Label>
            <Input
              type="url"
              name="src"
              placeholder="https://example.com"
              className="w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="desc">Description</Label>
            <Textarea
              name="desc"
              placeholder="Description"
              className="w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              type="text"
              name="price"
              placeholder="Price"
              className="w-full"
              required
            />
          </div>
          <Button
            type="submit"
            className="mt-3 col-span-2 ms-auto"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Accommodation;

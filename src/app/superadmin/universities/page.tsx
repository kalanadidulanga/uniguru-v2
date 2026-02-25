"use client";

import { getCountryList } from "@/actions/superAdmin/countryList";
import {
  addNewUniversity,
  getUniversityList,
} from "@/actions/superAdmin/univercitiesList";
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

import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import DataTable from "./DataTable";

const Universities = () => {
  const [countryList, setCountryList] = useState<any[]>([]);
  const [universityList, setUniversityList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<{
    id: string;
    name: string;
  }>({
    id: "",
    name: "",
  });

  const loadUniversities = async () => {
    setIsLoading(true);
    const selectedCountryId = parseInt(selectedCountry?.id);
    try {
      const res = await getUniversityList(
        selectedCountryId && selectedCountryId
      );
      if (res) {
        console.log(res);
        setUniversityList(res);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadUniversities();
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
        <h5 className="text-xl font-semibold">Universities List</h5>
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
          <AddUniversity countryList={countryList} reload={loadUniversities} />
        </div>
      </div>
      <div className=" w-full h-auto my-5">
        <DataTable
          data={universityList}
          isLoading={isLoading}
          reload={loadUniversities}
        />
      </div>
    </div>
  );
};

const AddUniversity = ({
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
      !dataObj.websiteUrl ||
      !dataObj.imageUrl
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      const newDataSet = {
        destinationId: parseInt(dataObj?.countryId as string),
        name: dataObj.name,
        websiteUrl: dataObj.websiteUrl,
        imageUrl: dataObj.imageUrl,
      };
      console.log(newDataSet);
      // You would typically send the data to your backend here

      const res = await addNewUniversity(newDataSet);
      if (res) {
        toast.success("University added successfully");
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
          New University
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new university</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-1 flex-col mt-3 space-y-4"
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
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="University name"
              className="w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="websiteUrl">Website URL</Label>
            <Input
              type="url"
              name="websiteUrl"
              placeholder="https://example.com"
              className="w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              type="url"
              name="imageUrl"
              placeholder="https://example.com/image.jpg"
              className="w-full"
              required
            />
          </div>
          <Button type="submit" className="mt-3 w-full" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Universities;

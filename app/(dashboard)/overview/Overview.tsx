"use client";
import { useGetParams } from "@/lib/hook/useGetParams";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

function getFormattedDate(timestamp: number): string {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

const Overview = () => {
  const { params } = useGetParams();
  return (
    <div className="center h-[calc(100vh-52px)]">
      <div className="w-[30%] m-auto ">
        <Card>
          <CardHeader>
            <CardTitle>Your Position Overview</CardTitle>
            <CardDescription>
              Manage and track your position In DCA.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold space-x-2 flex items-center flex-row">
              <span className="text-xl text-gray-500 font-semibold">
                Last Deposit :
              </span>
              <div className="text-black">
                {getFormattedDate(params.usersParams.depositTimestamp * 1000)}
              </div>
            </div>

            <Separator />
            <div className="text-2xl font-bold space-x-2 flex items-center flex-row">
              <span className="text-xl text-gray-500 font-semibold">
                Initial Deposit :
              </span>
              <div className="text-black">
                {" "}
                {params.usersParams.depositedAmount}
              </div>
            </div>

            <Separator />

            <div className="text-2xl font-bold space-x-2 flex items-center flex-row">
              <span className="text-xl text-gray-500 font-semibold">
                Current Eth Bought :
              </span>
              <div className="text-black">{params.usersParams.ethBalance}</div>
            </div>

            <Separator />
            <div className="text-2xl font-bold space-x-2 flex items-center flex-row">
              <span className="text-xl text-gray-500 font-semibold">
                Left USDC to invest:
              </span>
              <div className="text-black">
                {params.usersParams.stablecoinBalance}
              </div>
            </div>

            <Separator />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;

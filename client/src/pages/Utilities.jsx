import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Card, CardContent } from "@/components/ui/card"

import {
  Download,
  ShieldCheck,
  HardDrive,
  Settings,
} from "lucide-react"
import gsap from "gsap/all"
import { useGSAP } from "@gsap/react"
import { dscUtilities, runtimeSetup, tokenDrivers } from "@/data/utilitiesData"


const Utilities = () => {
  useGSAP(()=>{
    gsap.from(".utility-card", {
      y: 30,    
      duration: 1,
      ease: "power4.out", })

  }) 
  return (
    <div 
    className="utility-card w-full min-h-screen bg-[#F6F9FF]">
      <div className="w-full  mx-auto pb-15">

        {/* Hero Section */}
        <div className="w-full sm:h-[40vh] relative bg-[url('/hero-section-imgs/heroImg2.jpg')] bg-cover bg-bottom p-4  pt-8 sm:p-8 text-white">
        <div className="absolute top-0 left-0 w-full h-full z-1 bg-black/70 p-6 "/>
        
        <div className="relative z-12 max-w-3xl">
          <div className="inline-flex z-2 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium mb-5">
            <ShieldCheck className="h-4 w-4" />
            DSC Resources & Downloads
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl z-2 font-bold tracking-">
            DSC Installation Center
          </h1>

          <p className="text-white/70 mt-4 sm:mt-5 z-2 sm:text-lg leading-7 tracking-wide">
            Download all required DSC utilities, token drivers,
            Java runtime environments, and setup tools required
            for secure digital signature operations.
          </p> </div>
        </div>
<div className="w-full sm:px-20">
        {/* DSC Utilities */}
        <Card className="mt-12 sm:rounded-3xl border shadow-sm">
          <CardContent className="p-6 md:p-8">

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Settings className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  DSC Utilities
                </h2>

                <p className="text-muted-foreground text-sm mt-1">
                  Install DSC signing utilities required for
                  digital signature authentication and usage.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0040FA] hover:bg-[#0438d6] text-white">
                    <TableHead className="text-white">Utility Name</TableHead>
                    <TableHead className="text-white">Version</TableHead>
                    <TableHead className="text-white">Platform</TableHead>
                    <TableHead className="text-white text-right">
                      Download
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {dscUtilities.map((utility) => (
                    <TableRow key={utility.name}>
                      <TableCell className="font-medium">
                        {utility.name} Utility
                      </TableCell>

                      <TableCell>
                        {utility.version}
                      </TableCell>

                      <TableCell>
                        {utility.platform}
                      </TableCell>

                      <TableCell className="flex items-center justify-end">
                        <a href={utility.url} download className="gap-2 flex items-center text-sm cursor-pointer bg-blue-700 hover:bg-blue-600 text-white p-2 px-4 rounded-full">
                          <Download className="h-4 w-4" />
                          Download
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Token Drivers */}
        <Card className="mt-8 sm:rounded-3xl border shadow-sm">
          <CardContent className="p-6 md:p-8">

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-xl">
                <HardDrive className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Token Drivers
                </h2>

                <p className="text-muted-foreground text-sm mt-1">
                  Download token drivers required to detect
                  and use your DSC USB token securely.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0040FA] hover:bg-[#0438d6] text-white">
                    <TableHead className="text-white">Driver Name</TableHead>
                    <TableHead className="text-white">Version</TableHead>
                    <TableHead className="text-white">Platform</TableHead>
                    <TableHead className="text-white text-right">
                      Download
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {tokenDrivers.map((driver, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {driver.name}
                      </TableCell>

                      <TableCell>
                        {driver.version}
                      </TableCell>

                      <TableCell>
                        {driver.platform}
                      </TableCell>

                      <TableCell className=" flex items-center justify-end">
                        <a href={driver.url} download className="flex gap-2 text-sm cursor-pointer bg-blue-700 hover:bg-blue-600 text-white p-2 px-4 rounded-full">
                          <Download className="h-4 w-4" />
                          Download
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Runtime Setup */}
        <Card className="mt-8 rounded-3xl border shadow-sm">
          <CardContent className="p-6 md:p-8">

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-xl">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Runtime Environment Setup
                </h2>

                <p className="text-muted-foreground text-sm mt-1">
                  Install required runtime environments for
                  DSC applications and browser compatibility.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0040FA] hover:bg-[#0438d6] text-white">
                    <TableHead className="text-white">Software</TableHead>
                    <TableHead className="text-white">Required Version</TableHead>
                    <TableHead className="text-white">Platform</TableHead>
                    <TableHead className="text-white text-right">
                      Download
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {runtimeSetup.map((setup, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {setup.name}
                      </TableCell>

                      <TableCell>
                        {setup.version}
                      </TableCell>

                      <TableCell>
                        {setup.platform}
                      </TableCell>

                      <TableCell className="flex items-center justify-end">
                        
                        <a 
                        href={setup.url}
                        download
                        className="flex items-center gap-2 text-sm cursor-pointer bg-blue-700 hover:bg-blue-600 text-white p-2 px-4 rounded-full">
                          <Download className="h-4 w-4" />
                          Download
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card> </div>
      </div>
    </div>
  )
}

export default Utilities
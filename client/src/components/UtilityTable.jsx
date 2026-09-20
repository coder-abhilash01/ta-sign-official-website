import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

const UtilityTable = ({
  title,
  description,
  icon: Icon,
  data,
  nameLabel = "Utility Name",
  versionLabel = "Version",
  platformLabel = "Platform",
  onDownload,
}) => {
  return (
    <Card className="mt-8 sm:rounded-3xl border shadow-sm">
      <CardContent className="p-6 md:p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-3 rounded-xl">
            <Icon className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              {title}
            </h2>

            <p className="text-muted-foreground text-sm mt-1">
              {description}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#0040FA] hover:bg-[#0438d6] text-white">
                <TableHead className="text-white">
                  {nameLabel}
                </TableHead>

                <TableHead className="text-white">
                  {versionLabel}
                </TableHead>

                <TableHead className="text-white">
                  {platformLabel}
                </TableHead>

                <TableHead className="text-white text-right">
                  Download
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((item) => (
                <TableRow key={item._id}>
                  <TableCell className="font-medium">
                    {item.name}
                  </TableCell>

                  <TableCell>
                    {item.version}
                  </TableCell>

                  <TableCell>
                    {item.platform}
                  </TableCell>

                  <TableCell className="flex items-center justify-end">
                    <button
                      onClick={() => onDownload(item._id)}
                      className="gap-2 flex items-center text-sm cursor-pointer bg-blue-700 hover:bg-blue-600 text-white p-2 px-4 rounded-full"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

      </CardContent>
    </Card>
  );
};

export default UtilityTable;
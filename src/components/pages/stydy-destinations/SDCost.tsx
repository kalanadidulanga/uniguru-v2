"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface SDCostProps {
    dataSet: {
        title: string
        table: {
            education_level: string
            cost_range: string
        }[]
    }
}

interface data {
    data: {
        education_level: string
        cost_range: string
    }[]
}

const SDCost = ({ dataSet }: SDCostProps) => {
    return (
        <div className="my-container flex flex-col gap-5 items-center mb-24">
            <h3 className="text-3xl font-bold text-my-blue text-center lg:text-start">{dataSet?.title}</h3>
            <DataTable data={dataSet?.table} />
        </div>
    )
}

export default SDCost

function DataTable({ data }: data) {
    return (
        <div className="rounded-md border w-full max-w-3xl shadow-md">
            <Table>
                <TableHeader>
                    <TableRow className=" bg-gray-100">
                        <TableHead className=" text-black font-bold">
                            Types of Expenses
                        </TableHead>
                        <TableHead className=" text-black font-bold">
                            Annual Expenses
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            key={index}
                        // data-state={row.getIsSelected() && "selected"}
                        >
                            <TableCell>
                                {/* {flexRender(cell.column.columnDef.cell, cell.getContext())} */}
                                {row.education_level}
                            </TableCell>
                            <TableCell>
                                {/* {flexRender(cell.column.columnDef.cell, cell.getContext())} */}
                                {row.cost_range}
                            </TableCell>
                        </TableRow>
                    )
                    )}
                    {/* <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            No results.
                        </TableCell>
                    </TableRow> */}
                </TableBody>
            </Table>
        </div>
    )
}
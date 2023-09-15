import { v4 as uuidv4 } from "uuid";

interface IData {
  id: string;
  paidDate: string;
  salesOrder: number;
  content: string;
  customerName: string;
  pccName: string;
  state?: string;
  provider?: string;
  boAssigned?: string;
}

export const data: IData[] = [
  {
    id: uuidv4(),
    paidDate: '07/17/2023',
    salesOrder: 87696,
    content: 'ANA',
    customerName: 'Matthew Azud',
    pccName: 'John Smith',
  },
  {
    id: uuidv4(),
    paidDate: '08/17/2023',
    salesOrder: 87631,
    content: 'TMC - EMP',
    customerName: 'David Grecco',
    pccName: 'Bill Shakespear',
  },
  {
    id: uuidv4(),
    paidDate: '09/17/2023',
    salesOrder: 87611,
    content: 'EST- 067006 ',
    customerName: 'Andrew Davis',
    pccName: 'Confirmed',
  },
];

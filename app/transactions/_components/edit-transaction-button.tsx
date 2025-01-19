"use client";

import { useState } from "react";
import { PencilIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";
import DeleteTransactionButton from "./delete-transaction-button";

interface EditTransactionButtonPros {
  transaction: Transaction;
}

const EditTransactionButton = ({ transaction }: EditTransactionButtonPros) => {
  const [isDialogOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={isDialogOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{ ...transaction, amount: Number(transaction.amount) }}
        transactionId={transaction.id}
      />
      <DeleteTransactionButton transactionId={transaction.id} />
    </>
  );
};

export default EditTransactionButton;

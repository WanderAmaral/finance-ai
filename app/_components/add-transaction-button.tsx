"use client";

import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { Button } from "./ui/button";
import { ArrowDownUpIcon } from "lucide-react";

const AddTransactionButton = () => {
  const [isDialogOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button className="rounded-full" onClick={() => setDialogIsOpen(true)}>
        Adicioanr transação
        <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={isDialogOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;

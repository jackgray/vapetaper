'use client';

import { FC, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "@nextui-org/image"
import { Vape } from '@/types';
import Add from '@/components/add'

interface VapesProps {
  vapes: Vape[];
}

const Vapes: FC<VapesProps> = ({ vapes }) => {
  const [selectedVape, setSelectedVape] = useState<Vape | null>(null);

  const handleVapePress = async (deviceId: string) => {
    try {
      const userId = '123'; // Replace with actual user ID
      const purchaseDate = new Date().toISOString();

      const response = await fetch('/api/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, deviceId, purchaseDate }),
      });

      if (!response.ok) {
        throw new Error('Failed to record purchase');
      }

      const data = await response.json();
      console.log('Purchase recorded:', data);
      setSelectedVape(vapes.find(d => d.product_id === deviceId) || null);
    } catch (error) {
      console.error('Error recording purchase:', error);
    }
  };

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {vapes.map((item, index) => (
        // <Card
        //   shadow="sm"
        //   key={index}
        //   isPressable
        //   onPress={() => handleVapePress(item.product_id)}
        // >
        //   <CardBody className="overflow-visible p-0">
        //     <Add />
        //   </CardBody>
        //   <CardFooter className="text-small justify-between">
        //     <b>{item.brand_name}</b>
        //     <p className="text-default-500">{item.model_name}</p>
        //   </CardFooter>
        // </Card>
        <Card 
          isFooterBlurred 
          // className="w-full h-[300px] col-span-12 sm:col-span-7"
          key={index}
          isPressable
          onPress={() => handleVapePress(item.product_id)}
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">{item.brand_name}</p>
            <h4 className="text-white/90 font-medium text-xl">{item.model_name}</h4>
          </CardHeader>
          {/* <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-5.jpeg"
          /> */}
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              {/* <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://nextui.org/images/breathing-app-icon.jpeg"
              /> */}
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">
                  <Add />
                </p>
                <p className="text-tiny text-white/60">.</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Vapes;

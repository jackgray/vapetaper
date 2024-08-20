'use client';

import { FC, useState } from 'react';
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import Image from "@nextui-org/image";
import { Vape } from '@/types';
import Add from '@/components/add';
import Retire from '@/components/retire'

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
    <div className="flex gap-4 overflow-x-scroll p-4">
      {vapes.map((item, index) => (
        <Card
          key={index}
          isPressable
          onPress={() => handleVapePress(item.product_id)}
          className="min-w-[200px] relative" // Ensure all cards have the same width and are positioned correctly
        >
          <CardHeader className="flex flex-col items-start p-4">
            <p className="text-tiny text-black uppercase font-bold">{item.brand_name}</p>
            <h4 className="text-black font-medium text-xl">{item.model_name}</h4>
          </CardHeader>

          {/* <Image
            src="https://nextui.org/images/card-example-5.jpeg" // Replace with the actual image source
            alt={item.model_name}
            className="w-full h-32 object-cover"
          /> */}

          <CardFooter className="bg-gray-900 text-white p-4">
            <div className="flex justify-between items-left">
              <Add />
            </div>
            <div className="flex justify-between items-right">
              <Retire />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Vapes;

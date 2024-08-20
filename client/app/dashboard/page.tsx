'use client'; 

import { FC, useState, useEffect } from 'react';
import { title, subtitle } from "@/components/primitives";
import Vapes from '@/components/vapes';
import { Vape } from '@/types';
import seedData from '@/config/seed_data.json';
import UserSparkLineChart from '@/components/sparkline';

const DashboardPage: FC = () => {
  const vapes: Vape[] = seedData.vapes;

  return (
    <div>
      <div>
        <h2 className={subtitle({ class: "mt-4" })}>
          Consumption trends over past 3 months, weekly rolling average
        </h2>
          <UserSparkLineChart />
      </div>
      <h2 className={subtitle({ class: "mt-4" })}>
          Recently Used
      </h2>
      <div className="flex gap-4 overflow-x-scroll p-4">
        <Vapes vapes={ vapes } />
      </div>
    </div>
  );
};

export default DashboardPage;

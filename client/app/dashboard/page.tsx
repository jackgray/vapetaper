'use client'; 

import { FC, useState, useEffect } from 'react';
import { title, subtitle } from "@/components/primitives";
import Vapes from '@/components/vapes';
import { Vape } from '@/types';
import seedData from '@/config/seed_data.json';
import UserSparkLineChart from '@/components/sparkline'

const DashboardPage: FC = () => {
  const vapes: Vape[] = seedData.vapes;

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
      <h1 className={title()}>Usage Data</h1>
      <section>
        <UserSparkLineChart />
      </section>
      <section>
        <div className="inline-block max-w-lg text-center justify-center">
          <h2 className={subtitle({ class: "mt-4" })}>
          Just bought a vape?
          </h2>      
          <Vapes vapes={vapes} />
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;

'use client'; 

import { FC, useState, useEffect } from 'react';
import { title, subtitle } from "@/components/primitives";

import UserHorizontalBarChart from '@/components/barchart';

const StatsPage: FC = () => {
  return (
    <div>
      <div>
        <UserHorizontalBarChart />
      </div>
    </div>
  );
};

export default StatsPage;

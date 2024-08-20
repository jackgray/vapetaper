'use client'; 

import { useState, useEffect } from 'react';

interface VapeRecord {
  id: string;
  purchase_date: string;
  nicotine_concentration: number;
  puff_capacity: number;
  price: number;
  time_to_consume: number;
}

interface UserDataProps {
  purchaseRecords: VapeRecord[];
}

function getWeek(date: Date): number {
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const numberOfDays = Math.floor(
    (date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000)
  );
  return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
}

export default function UserData({ purchaseRecords }: UserDataProps) {
  const [weeklyStats, setWeeklyStats] = useState<{
    spendingChange?: number;
    consumptionChange?: number;
  }>({});

  useEffect(() => {
    const calcStats = () => {
      let lastWeekSpending = 0;
      let thisWeekSpending = 0;
      let lastWeekConsumption = 0;
      let thisWeekConsumption = 0;

      purchaseRecords.forEach((record) => {
        const week = getWeek(new Date(record.purchase_date));

        if (week === getWeek(new Date()) - 1) {
          lastWeekSpending += record.price;
          lastWeekConsumption +=
            (record.nicotine_concentration / 100) * record.puff_capacity;
        } else if (week === getWeek(new Date())) {
          thisWeekSpending += record.price;
          thisWeekConsumption +=
            (record.nicotine_concentration / 100) * record.puff_capacity;
        }
      });

      setWeeklyStats({
        spendingChange:
          ((thisWeekSpending - lastWeekSpending) / lastWeekSpending) * 100,
        consumptionChange:
          ((thisWeekConsumption - lastWeekConsumption) / lastWeekConsumption) * 100,
      });
    };

    calcStats();
  }, [purchaseRecords]);

  return (
    <div>
      <h2>Weekly Stats</h2>
      <p>Spending Change: {weeklyStats.spendingChange?.toFixed(2)}%</p>
      <p>Consumption Change: {weeklyStats.consumptionChange?.toFixed(2)}%</p>
    </div>
  );
}

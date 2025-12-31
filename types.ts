import React from 'react';

export interface PricingTier {
  name: string;
  price: number | string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
}
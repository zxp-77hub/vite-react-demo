import React from 'react'
export interface IDemoProps {
  title: string;
}

export interface IChildDemo extends IDemoProps {
  children: React.ReactNode[]|React.ReactNode
}
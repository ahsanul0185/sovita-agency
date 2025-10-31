"use client"

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { tabs_data } from "@/data/data";
import Project_Card from "./project-card";
import Main_button from "./main-button";

export default function Our_Porject_Tabs() {
  return (
      <Tabs className='pb-15 lg:pb-30' defaultIndex={1} onSelect={(index) => {}} selectedTabClassName='selected-item'>
        <TabList className='flex items-center justify-center mb-10 flex-wrap fade_in_slide_up'>
          <Tab className='text-base text-white border border-transparent px-5 py-3 cursor-pointer [&.selected-item]:border [&.selected-item]:border-main-blue [&.selected-item]:rounded-full [&.selected-item]:text-main-blue focus-visible:outline-none'>
            Tout
          </Tab>
          <Tab className='text-white border border-transparent px-5 py-3 cursor-pointer [&.selected-item]:border [&.selected-item]:border-main-blue [&.selected-item]:rounded-full [&.selected-item]:text-main-blue focus-visible:outline-none'>
            Commerçants
          </Tab>
          <Tab className='text-white border border-transparent px-5 py-3 cursor-pointer [&.selected-item]:border [&.selected-item]:border-main-blue [&.selected-item]:rounded-full [&.selected-item]:text-main-blue focus-visible:outline-none'>
            Professions libérales
          </Tab>
          <Tab className='text-white border border-transparent px-5 py-3 cursor-pointer [&.selected-item]:border [&.selected-item]:border-main-blue [&.selected-item]:rounded-full [&.selected-item]:text-main-blue focus-visible:outline-none'>
            PME/PMI
          </Tab>
          <Tab className='text-white border border-transparent px-5 py-3 cursor-pointer [&.selected-item]:border [&.selected-item]:border-main-blue [&.selected-item]:rounded-full [&.selected-item]:text-main-blue focus-visible:outline-none'>
            Autres
          </Tab>
        </TabList>

        <div className='tab-panel'>
          {[1,2,3,4,5].map((_t) => (
              <TabPanel key={_t}>
                <div className='tab-panel-content-items text-center'>
                  <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10'>
                    {tabs_data[0].map((card, index) => (
                       <Project_Card key={index} counters={card.counters} title={card.title} tags={card.tags} thumbnail_url={`/portfolio/${card.thumbnail_url}`}/>
                    ) )}
                  </div>
                  <Main_button button_title='Charger plus de résultats' button_url='/' />
                </div>
              </TabPanel>
          ))}
        </div>
      </Tabs>
  )
}

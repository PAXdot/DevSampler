"use client";

import React from 'react';

interface Integration {
  id: number;
  icon: React.ReactElement;
  title: string;
  description: string;
}

interface IntegrationCardProps {
    icon: React.ReactElement; 
    title: string;
    description: string;
}
const PlaceholderIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>
  </svg>
);

const integrationData: Integration[] = [
  { id: 1, icon: <PlaceholderIcon />, title: 'Jamf', description: 'Verify Devices' },
  { id: 2, icon: <PlaceholderIcon />, title: 'CrowdStrike', description: 'Verify Devices' },
  { id: 3, icon: <PlaceholderIcon />, title: 'Intune', description: 'Verify Devices' },
  { id: 4, icon: <PlaceholderIcon />, title: 'Kandji', description: 'Verify Devices' },
  { id: 5, icon: <PlaceholderIcon />, title: 'JumpCloud', description: 'Sync Users & Groups' },
  { id: 6, icon: <PlaceholderIcon />, title: 'Azure AD', description: 'Sync Users & Groups' },
  { id: 7, icon: <PlaceholderIcon />, title: 'Okta', description: 'Sync Users & Groups' },
  { id: 8, icon: <PlaceholderIcon />, title: 'Google Workspace', description: 'Sync Users & Groups' },
  { id: 9, icon: <PlaceholderIcon />, title: 'Pulumi', description: 'Automate Deployment' },
  { id: 10, icon: <PlaceholderIcon />, title: 'Terraform', description: 'Automate Deployment' },
  { id: 11, icon: <PlaceholderIcon />, title: 'NextDNS', description: 'Filter & Encrypt DNS' },
  { id: 12, icon: <PlaceholderIcon />, title: 'Tailscale', description: 'Secure Network' },
];

const IntegrationCard: React.FC<IntegrationCardProps> = ({ icon, title, description }) => {
  return (
    <div
      className="bg-[#1A1A1A] p-4 rounded-lg border border-transparent hover:border-[#2C2C2C] transition-colors duration-200 flex flex-col space-y-3 w-[280px] flex-none lg:w-auto lg:mb-4"
    >
      <div className="text-white h-8 w-8 flex items-center justify-center">
         {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white text-opacity-70">{description}</p>
    </div>
  );
};

export const IntegrationsSection: React.FC = () => {

 
  const column1Data = integrationData.slice(0, 4);
  const column2Data = integrationData.slice(4, 8);
  const column3Data = integrationData.slice(8, 12);

  const column1InfiniteData = [...column1Data, ...column1Data, ...column1Data];
  const column2InfiniteData = [...column2Data, ...column2Data, ...column2Data];
  const column3InfiniteData = [...column3Data, ...column3Data, ...column3Data];

  const horizontalInfiniteData = [...integrationData, ...integrationData, ...integrationData];

  const animationDurationDesktop = '40s';
  const animationDurationMobile = '60s';


  return (
    <section className="w-full bg-[#141414] py-16 sm:py-20 lg:py-24 overflow-hidden relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        <div className="flex flex-col justify-start order-2 lg:order-1">
          <p className="text-yellow-400 text-sm font-medium tracking-wide uppercase mb-3">
            Integrations
          </p>
          <h2 className="text-4xl sm:text-5xl font-light leading-tight text-white mb-6">
            Build a best-in-class security ecosystem
          </h2>
          <p className="text-white text-opacity-70 text-lg leading-relaxed mb-8">
            Twingate is a central Zero Trust orchestration layer, so you can
            create a best-in-class security ecosystem without having to recut
            your network. Leverage out-of-the-box integrations with major
            IdPs, MDM/EDRs, SIEMs, DOH providers, and more.
          </p>
          <a
            href="#"
            className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#2C2C2C] hover:bg-[#3A3A3A] transition-colors duration-200 shadow-sm w-fit"
          >
            Explore Integrations
            <svg className="ml-2 -mr-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 11H5a1 1 0 110-2h8.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>

        <div className="order-1 lg:order-2">

          <div className="flex flex-row overflow-x-hidden pb-4 scroll-mask-horizontal lg:hidden">
            <div
              className="flex flex-row gap-4 whitespace-nowrap animated-horizontal"
              style={{
                animation: `cards-scroll-left ${animationDurationMobile} linear infinite`,
                width: `${horizontalInfiniteData.length / (horizontalInfiniteData.length / integrationData.length) * 100}%`
              }}
            >
                {horizontalInfiniteData.map((item, index) => (
                     <IntegrationCard
                      key={`${item.id}-${index}`}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
            </div>
          </div>


          <div className="hidden lg:grid lg:grid-cols-3 gap-8">

            <div className="flex flex-col h-[480px] overflow-hidden scroll-mask-vertical">
              <div
                className="flex flex-col animated-column"
                style={{ animation: `cards-scroll-down ${animationDurationDesktop} linear infinite` }}
              >
                {column1InfiniteData.map((item, index) => (
                   <IntegrationCard
                    key={`${item.id}-${index}`}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

             <div className="flex flex-col h-[480px] overflow-hidden scroll-mask-vertical">
              <div
                className="flex flex-col animated-column"
                style={{ animation: `cards-scroll-up ${animationDurationDesktop} linear infinite` }}
              >
                 {column2InfiniteData.map((item, index) => (
                   <IntegrationCard
                     key={`${item.id}-${index}`}
                     icon={item.icon}
                     title={item.title}
                     description={item.description}
                  />
                ))}
              </div>
            </div>

             <div className="flex flex-col h-[480px] overflow-hidden scroll-mask-vertical">
              <div
                 className="flex flex-col animated-column"
                 style={{ animation: `cards-scroll-down ${animationDurationDesktop} linear infinite` }}
              >
                 {column3InfiniteData.map((item, index) => (
                   <IntegrationCard
                     key={`${item.id}-${index}`}
                     icon={item.icon}
                     title={item.title}
                     description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

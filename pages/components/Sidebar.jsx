import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { RiMessage3Fill } from 'react-icons/ri';
import { MdAnnouncement } from 'react-icons/md';
import { HiUsers } from 'react-icons/hi';
import { FaForumbee } from 'react-icons/fa';
import { DiBingSmall } from 'react-icons/di';

const Sidebar = () => {
  return (
    <div className='mt-[3.4375rem] ml-[12.1875rem]'>
      {/* github button */}
      <a href='https://discord.com/channels/833343822540832798' target={'_blank'} className='inline-flex items-center py-3 px-4 bg-primary hover:bg-opacity-95 rounded-[0.25rem] w-[16.25rem]'>
      <VscGithub className='text-white text-2xl' />
      <p className='text-sm font-bold leading-4 text-white uppercase ml-2'>join the discord</p>
      </a>

      {/* 5li liste */}
      <div className='my-4'>
        <a href='#' className='flex items-center my-4 text-secondary hover:text-primary'>
          <RiMessage3Fill className='text-2xl' />
          <p className='ml-3'>Grup Listesi</p>
        </a>

        <a href='#' className='flex items-center my-4 text-secondary hover:text-primary'>
          <MdAnnouncement className='text-2xl' />
          <p className='ml-3'>Duyurular</p>
        </a>

        <a href='#' className='flex items-center my-4 text-secondary hover:text-primary'>
          <HiUsers className='text-2xl' />
          <p className='ml-3'>Kullanıcı Listesi</p>
        </a>

        <a href='#' className='flex items-center my-4 text-secondary hover:text-primary'>
          <FaForumbee className='text-2xl' />
          <p className='ml-3'>Forum</p>
        </a>

        <a href='#' className='flex items-center my-4 text-secondary hover:text-primary'>
          <DiBingSmall className='text-2xl' />
          <p className='ml-3'>Lorem Ipsum</p>
        </a>
      </div>

      {/* diğer liste */}
      <div className='mt-11'>
        <a href='#'  className='flex items-center my-4 text-secondary hover:text-primary'>
          <RiMessage3Fill className='text-2xl' />
          <p className='ml-3'>Grup Listesi</p>
        </a>

        <a href='#'  className='flex items-center my-4 text-secondary hover:text-primary'>
          <MdAnnouncement className='text-2xl' />
          <p className='ml-3'>Duyurular</p>
        </a>

        <a href='#'  className='flex items-center my-4 text-secondary hover:text-primary'>
          <HiUsers className='text-2xl' />
          <p className='ml-3'>Kullanıcı Listesi</p>
        </a>

        <a href='#'  className='flex items-center my-4 text-secondary hover:text-primary'>
          <FaForumbee className='text-2xl' />
          <p className='ml-3'>Forum</p>
        </a>

        <a href='#'  className='flex items-center my-4 text-secondary hover:text-primary'>
          <DiBingSmall className='text-2xl' />
          <p className='ml-3'>Lorem Ipsum</p>
        </a>

        <a href='#'  className='flex items-center my-4 text-secondary hover:text-primary'>
          <RiMessage3Fill className='text-2xl' />
          <p className='ml-3'>Grup Listesi</p>
        </a>

        <a href='#'  className='flex items-center my-4 text-secondary hover:text-primary'>
          <MdAnnouncement className='text-2xl' />
          <p className='ml-3'>Duyurular</p>
        </a>

        <a href='#'  className='flex items-center my-4 text-secondary hover:text-primary'>
          <HiUsers className='text-2xl' />
          <p className='ml-3'>Kullanıcı Listesi</p>
        </a>

        <a href='#'  className='flex items-center my-4 text-secondary hover:text-primary'>
          <FaForumbee className='text-2xl' />
          <p className='ml-3'>Forum</p>
        </a>

        <a href='#'  className='flex items-center my-4 text-secondary hover:text-primary'>
          <DiBingSmall className='text-2xl' />
          <p className='ml-3'>Lorem Ipsum</p>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
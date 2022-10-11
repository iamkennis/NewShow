import Link from 'next/link';
import React from 'react'
import { FaTimes, FaGripLines, FaHeart, FaCheckCircle } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineSearch, AiOutlineShopping} from 'react-icons/ai';
import Image from 'next/image';

export default function HomePage() {
  return (
		<>
			<div className='bg-[#F5F5F5] h-full w-full px-4 md:px-20 lg:px-24 py-8'>
				<nav className='flex flex-row justify-between items-center'>
					<div>
						<Image width='50%' height='40%' src='/images/logo.svg' alt='logo' />
					</div>
					<div className='space-x-6 hidden text-[16px] lg:block'>
						<Link href=''>Footwear</Link>
						<Link href=''>About us</Link>
						<Link href=''>Products</Link>
						<Link href=''>Sale</Link>
					</div>
					<div className='flex flex-row gap-6 text-[24px]'>
						<span className=' md:hidden lg:block'>
							<AiOutlineSearch />
						</span>
						<span className='hidden lg:block'>
							<AiOutlineUser />
						</span>
						<span className=' md:hidden lg:block'>
							<AiOutlineShopping />
						</span>
						<span className='lg:hidden'>
							<FaGripLines />
						</span>
					</div>
				</nav>
				<header className='my-8 grid grid-flow-row md:items-center md:grid-flow-col'>
					<div className='flex flex-col items-center md:items-start gap-8'>
						<div className='mt-8 md:mt-0'>
							<h4 className='text-[32px] md:max-w-lg lg:text-[44px] font-bold md:text-start text-center py-4'>
								Get your awesome sneakers.
							</h4>
							<p className='text-[18px] md:text-start max-w-sm md:max-w-sm text-center text-[#6C6B6B]'>
								We offer the best deals in our shop. Check them out now. We have
								awesome stuff on sale for you.
							</p>
						</div>
						<div className='flex flex-row space-x-4 items-center'>
							<button className='bg-[#FF3C78] font-bold text-white w-[125px] lg:w-[160px] h-[48px] rounded-[4px]'>
								Shop Now
							</button>
							<FaHeart />
						</div>
						<div className='flex flex-col'>
							<span className='flex flex-row items-center space-x-2'>
								<FaCheckCircle />
								<p>Free shipping</p>
							</span>
							<span className='flex flex-row items-center space-x-2'>
								<FaCheckCircle />
								<p>Free returns</p>
							</span>
						</div>
					</div>
					<div>
						<Image
							width='1000px'
							height='1000px'
							objectFit='cover'
							src='/images/Sha.svg'
							alt='logo'
							// className='w-[800px] h-[800px]'
						/>
					</div>
				</header>
			</div>
		</>
	);
}

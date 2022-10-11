import Link from 'next/link';
import React from 'react'
import { FaTimes, FaGripLines, FaCheckCircle } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineSearch, AiOutlineShopping, AiOutlineHeart} from 'react-icons/ai';
import Image from 'next/image';

export default function HomePage() {
  return (
		<>
			<div className='bg-[#F5F5F5] h-full w-full px-4 md:px-20 lg:px-24 py-8'>
				<nav className='flex flex-row justify-between items-center'>
					<div>
						<Image width='50%' height='40%' src='/images/logo.svg' alt='logo' />
					</div>
					<div className='space-x-6 font-medium hidden text-[16px] lg:block'>
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
							<h4 className='text-[32px] md:text-[25px] md:max-w-md lg:text-[44px] font-bold md:text-start text-center py-4'>
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
							<span className='text-[#FF3C78] text-[24px]'>
								<AiOutlineHeart />
							</span>
						</div>
						<div className='flex flex-col md:flex-row md:items-center md:gap-8 space-y-2'>
							<span className='flex flex-row items-center space-x-2'>
								<span className='text-green-600 text-[20px]'>
									<FaCheckCircle />
								</span>
								<p className='text-[16px] text-[#6C6B6B]'>Free shipping</p>
							</span>
							<span className='flex flex-row items-center space-x-2'>
								<span className='text-green-600 text-[20px]'>
									<FaCheckCircle />
								</span>
								<p className='text-[16px] text-[#6C6B6B]'>Free returns</p>
							</span>
						</div>
					</div>
					<div className=''>
						<Image
							width='800px'
							height='800px'
							objectFit='cover'
							src='/images/Sha.svg'
							alt='logo'
						/>
					</div>
				</header>
			</div>
			<main className='w-full h-full px-8 lg:px-24'>
				<div className='my-12 lg:py-14'>
					<h4 className='text-[26px] md:text-[40px] font-bold text-center'>
						Featured products
					</h4>
					<p></p>
				</div>
				<div className='py-8 grid grid-flow-row gap-24 md:gap-12 md:grid-cols-2 lg:grid-cols-4'>
					<div className='flex flex-col items-center'>
						<div className='relative top-0 left-0 right-0 bottom-0 flex flex-col items-center'>
							<div className='absolute left-24 md:left-36 lg:left-24 lg:w-[80px] lg:h-[80px] -top-6 right-0 bg-gradient-to-r rounded-full w-[120px] h-[120px]  from-[#FFDEBE] to-[#FE7831]'></div>
							<div className=''>
								<Image
									width='400px'
									height='200px'
									objectFit='cover'
									src='/images/shoe1.svg'
									alt='logo'
								/>
							</div>
						</div>
						<div className='text-center space-y-4'>
							<Image
								width='90px'
								height='20px'
								objectFit='contain'
								src='/images/Rating.svg'
								alt='logo'
							/>
							<p className='text-[16px] max-w-md'>
								Adidas Falcon Shoes for men - 2021 Edition
							</p>
							<h4 className='font-bold text-[18px]'>$120.50</h4>
						</div>
					</div>
					<div className='flex flex-col items-center'>
						<div className='relative flex flex-col items-center'>
							<div className='absolute left-24 md:left-36 lg:left-24 lg:w-[80px] lg:h-[80px]  -top-6 right-0 bg-gradient-to-r rounded-full w-[120px] h-[120px]  from-[#50ad89] to-[ #02BE83]'></div>
							<div className=''>
								<Image
									width='400px'
									height='200px'
									objectFit='cover'
									src='/images/shoe2.svg'
									alt='logo'
								/>
							</div>
						</div>
						<div className='text-center space-y-4'>
							<Image
								width='90px'
								height='20px'
								objectFit='contain'
								src='/images/Rating.svg'
								alt='logo'
							/>
							<p className='text-[16px] max-w-md'>
								Adidas Falcon Shoes for men - 2021 Edition
							</p>
							<h4 className='font-bold text-[18px]'>$120.50</h4>
						</div>
					</div>
					<div className='flex flex-col items-center'>
						<div className='relative flex flex-col items-center'>
							<div className='absolute left-24 md:left-36 lg:left-24 lg:w-[80px] lg:h-[80px]  -top-6 right-0 bg-gradient-to-r rounded-full w-[120px] h-[120px]  from-[#FFB2B2] to-[#FF3C78]'></div>
							<div className=''>
								<Image
									width='400px'
									height='200px'
									objectFit='cover'
									src='/images/shoe3.svg'
									alt='logo'
								/>
							</div>
						</div>
						<div className='text-center space-y-4'>
							<Image
								width='90px'
								height='20px'
								objectFit='contain'
								src='/images/Rating.svg'
								alt='logo'
							/>
							<p className='text-[16px] max-w-md'>
								Adidas Falcon Shoes for men - 2021 Edition
							</p>
							<h4 className='font-bold text-[18px]'>$120.50</h4>
						</div>
					</div>
					<div className='flex flex-col items-center'>
						<div className='relative flex flex-col items-center'>
							<div className='absolute left-24 md:left-36 lg:left-24 lg:w-[80px] lg:h-[80px]  -top-6 right-0 bg-gradient-to-r rounded-full w-[120px] h-[120px]  from-[#315BFF] to-[#8AA8F8]'></div>
							<div className=''>
								<Image
									width='400px'
									height='200px'
									objectFit='cover'
									src='/images/shoe4.svg'
									alt='logo'
								/>
							</div>
						</div>
						<div className='text-center space-y-4'>
							<Image
								width='90px'
								height='20px'
								objectFit='contain'
								src='/images/Rating.svg'
								alt='logo'
							/>
							<p className='text-[16px] max-w-md'>
								Adidas Falcon Shoes for men - 2021 Edition
							</p>
							<h4 className='font-bold text-[18px]'>$120.50</h4>
						</div>
					</div>
				</div>
			</main>
			<section className='h-full mt-24 grid grid-flow-row  md:grid-cols-2'>
				<div className='h-screen w-full md:h-full md:py-8 bg-[#02BE83]'>
					<div className='flex flex-col md:flex-row items-center px-4'>
						<Image
							width='300px'
							height='400px'
							objectFit='cover'
							src='/images/ftball.svg'
							alt='logo'
						/>
						<div className='space-y-4 text-center md:text-start'>
							<p className='text-[#0A083A] text-[16px]'>Accesories</p>
							<h4 className='text-white font-bold text-[34px]'>Football</h4>
							<p className='text-white text-[16px] w-48'>
								We receive new sportwear every day. Just take your pick.
							</p>
							<button className='bg-[#0A083A] font-bold text-white w-[135px] h-[45px] rounded-[4px]'>
								Shop Now
							</button>
						</div>
					</div>
				</div>
				<div className='h-screen w-full md:h-full md:py-8  bg-[#0A083A]'>
					<div className='flex flex-col md:flex-row items-center px-4'>
						<Image
							width='300px'
							height='400px'
							objectFit='contain'
							src='/images/vlley.svg'
							alt='logo'
						/>
						<div className='space-y-4 text-center md:text-start'>
							<p className='text-[#02BE83] text-[16px]'>Accesories</p>
							<h4 className='text-white font-bold text-[34px]'>Volleyball</h4>
							<p className='text-white text-[16px] w-48'>
								We receive new sportwear every day. Just take your pick.
							</p>
							<button className='bg-[#02BE83] font-bold text-white w-[135px] h-[45px] rounded-[4px]'>
								Shop Now
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

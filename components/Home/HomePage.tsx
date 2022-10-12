import Link from 'next/link';
import React from 'react'
import { FaTimes, FaGripLines, FaCheckCircle, FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineSearch, AiOutlineShopping, AiOutlineHeart} from 'react-icons/ai';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';


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
						<div className='text-center md:text-start space-y-4'>
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
						<div className='text-center md:text-start space-y-4'>
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
						<div className='text-center md:text-start space-y-4'>
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
						<div className='text-center md:text-start space-y-4'>
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
			<section className='my-8'>
				<div className='flex flex-col items-center md:flex-row md:justify-between md:px-20'>
					<h4 className='text-[24px] font-bold'>Best seller this work</h4>
					<div className='text-[16px] font-normal'>
						<span className='flex text-[16px] font-bold items-center gap-4'>
							<p>Men</p>
							<span className='text-[34px] text-blue-400'>
								<FaToggleOn />
							</span>
							<p>Women</p>
						</span>
					</div>
				</div>
				<div className='my-8 grid grid-flow-row md:grid-cols-12 md:gap-20  items-center'>
					<div className='relative my-8 grid md:col-span-7'>
						<div className='bg-gradient-to-r max-w-xs md:max-w-md h-[250px] sm:max-w-lg sm:h-[350px] md:h-[300px] rounded-r-[34px] from-[#FFB2B2] to-[#FF3C78]'></div>
						<span className='absolute top-10 bottom-0 md:top-6 md:bottom-0'>
							<Image
								width='800px'
								height='400px'
								objectFit='cover'
								src='/images/bigshoe.svg'
								alt='logo'
							/>
						</span>
					</div>
					<div className='space-y-4 grid md:col-span-4 items-center text-center md:text-start'>
						<div>
							<Image
								width='90px'
								height='20px'
								objectFit='contain'
								src='/images/Rating.svg'
								alt='logo'
							/>
						</div>
						<div className='flex flex-col items-center md:items-start space-y-4'>
							<p className='text-[18px] md:text-[20px] max-w-xs md:max-w-xs font-bold'>
								Adidas Falcon Shoes for women - 2021 Edition
							</p>
							<p className='text-[14px] md:text-[18px] font-bold'>$120.50</p>
							<button className='bg-[#315BFF] font-bold text-white w-[135px] h-[45px] rounded-[4px]'>
								Shop Now
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-[#F5F5F5] h-64 w-full px-4 md:px-22 py-4'>
				<div className='flex flex-col items-center md:flex-row md:justify-between gap-4'>
					<span>
						<h4 className='text-[28px] text-center md:text-start font-bold'>
							New arrivals
						</h4>
						<p className='text-[14px] text-center md:text-start w-72 text-[#6C6B6B]'>
							Enjoy the new products from our store. Select what you like, enjoy
							& return.
						</p>
					</span>
					<p className="text-[#FF3C78] after:content-['>']">View all</p>
				</div>
				<div className='mt-24 px-4'>
					<Splide
						options={{
							// perPage: 1,
							gap: '1rem',
							arrows: false,
							pagination: true,
							breakpoints: {
								640: {
									perPage: 1,
									gap: '1rem',
								},
								768: {
									perPage: 2,
									gap: '1rem',
								},
								1024: {
									perPage: 3,
									gap: '1rem',
								},
								1440: {
									perPage: 4,
								},
							},
						}}
						aria-label='My Favorite Images'>
						<SplideSlide>
							<div className='flex flex-col items-center'>
								<div className='bg-gradient-to-r w-[200px] h-[300px] rounded-3xl from-[#FFDEBE] to-[#FE7831]'>
									<p className='text-white text-[24px] font-bold p-4'>1</p>
									<span>
										<Image
											width='800px'
											height='750px'
											objectFit='cover'
											src='/images/shoe6.svg'
											alt='logo'
										/>
									</span>
									<span className='bg-white px-5 text-[16px] rounded-xl float-right mr-4'>
										+
									</span>
								</div>
								<div className='text-center md:text-start py-10'>
									<Image
										width='90px'
										height='20px'
										objectFit='contain'
										src='/images/Rating.svg'
										alt='logo'
									/>
									<p className='text-[16px] w-52'>
										Adidas Falcon Shoes for men - 2021 Edition
									</p>
									<h4 className='font-bold text-[18px] md:text-[22px]'>
										$120.50
									</h4>
								</div>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className='flex flex-col items-center'>
								<div className='bg-gradient-to-r w-[200px] h-[300px] rounded-3xl from-[#8AA8F8] to-[#315BFF]'>
									<p className='text-white text-[24px] font-bold p-4'>2</p>
									<span>
										<Image
											width='800px'
											height='750px'
											objectFit='cover'
											src='/images/shoe6.svg'
											alt='logo'
										/>
									</span>
									<span className='bg-white px-5 text-[16px] rounded-xl float-right mr-4'>
										+
									</span>
								</div>
								<div className='text-center md:text-start py-10'>
									<Image
										width='90px'
										height='20px'
										objectFit='contain'
										src='/images/Rating.svg'
										alt='logo'
									/>
									<p className='text-[16px] w-52'>
										Adidas Falcon Shoes for men - 2021 Edition
									</p>
									<h4 className='font-bold text-[18px] md:text-[22px]'>
										$120.50
									</h4>
								</div>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className='flex flex-col items-center'>
								<div className='bg-gradient-to-r w-[200px] h-[300px] rounded-3xl from-[#B3F6DC] to-[#02BE83]'>
									<p className='text-white text-[24px] font-bold p-4'>3</p>
									<span>
										<Image
											width='800px'
											height='750px'
											objectFit='cover'
											src='/images/shoe7.svg'
											alt='logo'
										/>
									</span>
									<span className='bg-white px-5 text-[16px] rounded-xl float-right mr-4'>
										+
									</span>
								</div>
								<div className='text-center md:text-start py-10'>
									<Image
										width='90px'
										height='20px'
										objectFit='contain'
										src='/images/Rating.svg'
										alt='logo'
									/>
									<p className='text-[16px] w-52'>
										Adidas Falcon Shoes for men - 2021 Edition
									</p>
									<h4 className='font-bold text-[18px] md:text-[22px]'>
										$120.50
									</h4>
								</div>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className='flex flex-col items-center'>
								<div className='bg-gradient-to-r w-[200px] h-[300px] rounded-3xl from-[#FFB2B2] to-[#FF3C78]'>
									<p className='text-white text-[24px] font-bold p-4'>4</p>
									<span>
										<Image
											width='800px'
											height='750px'
											objectFit='cover'
											src='/images/shoe8.svg'
											alt='logo'
										/>
									</span>
									<span className='bg-white px-5 text-[16px] rounded-xl float-right mr-4'>
										+
									</span>
								</div>
								<div className='text-center md:text-start py-10'>
									<Image
										width='90px'
										height='20px'
										objectFit='contain'
										src='/images/Rating.svg'
										alt='logo'
									/>
									<p className='text-[16px] w-52'>
										Adidas Falcon Shoes for men - 2021 Edition
									</p>
									<h4 className='font-bold text-[18px] md:text-[22px]'>
										$120.50
									</h4>
								</div>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className='flex flex-col items-center'>
								<div className='bg-gradient-to-r w-[200px] h-[300px] rounded-3xl from-[#8AA8F8] to-[#315BFF]'>
									<p className='text-white text-[24px] font-bold p-4'>5</p>
									<span>
										<Image
											width='800px'
											height='750px'
											objectFit='cover'
											src='/images/shoe6.svg'
											alt='logo'
										/>
									</span>
									<span className='bg-white px-5 text-[16px] rounded-xl float-right mr-4'>
										+
									</span>
								</div>
								<div className='text-center md:text-start py-10'>
									<Image
										width='90px'
										height='20px'
										objectFit='contain'
										src='/images/Rating.svg'
										alt='logo'
									/>
									<p className='text-[16px] w-52'>
										Adidas Falcon Shoes for men - 2021 Edition
									</p>
									<h4 className='font-bold text-[18px] md:text-[22px]'>
										$120.50
									</h4>
								</div>
							</div>
						</SplideSlide>
					</Splide>
				</div>
			</section>
		</>
	);
}

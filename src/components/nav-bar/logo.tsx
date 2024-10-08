import Image from 'next/image'
import logo_vertical from '/public/images/포트폴리오-로고-2.png'
import logo_horizontal from '/public/images/포트폴리오-로고-3.png'
import classNames from 'classnames'
import Link from 'next/link'

export default function Logo({ horizontal }: { horizontal?: boolean }) {
  return (
    <Link
      href={'/'}
      className={classNames(
        'flex justify-center',
        !horizontal && 'border-b border-neutralLighter bg-white/50',
      )}
    >
      <Image
        src={horizontal ? logo_horizontal : logo_vertical}
        className={
          horizontal
            ? 'w-auto h-[50px] object-contain'
            : 'w-15 h-15 object-contain'
        }
        alt="이소진의 포트폴리오"
        width={horizontal ? 200 : 50}
        height={horizontal ? 100 : 50}
      />
    </Link>
  )
}

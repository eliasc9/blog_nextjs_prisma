'use client'

import { usePathname, useRouter, useSearchParams  } from 'next/navigation'
import { useCallback, useState } from 'react'

type PostsPaginationProps = {
  totalPages: number,
  page: number,
}

export default function PostsPagination({ totalPages, page }: PostsPaginationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [currentPage, setCurrentPage] = useState(page);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const onClick = (newPage: number) => {
    router.push(pathname + '?' + createQueryString('page', String(newPage)))
    setCurrentPage(newPage)
  }

  const renderPagination = () => {
    const paginationItems = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <li key={i}>
          <button
            onClick={() => onClick(i)}
            className={`py-2 px-4 border-t border-b font-bold ${
              i === currentPage
                ? 'bg-black text-neutral-200 hover:bg-neutral-700 hover:text-neutral-50'
                : 'bg-white text-neutral-800 hover:bg-neutral-300 hover:text-neutral-950 underline'
            } `}
          >
            {i}
          </button>
        </li>
      );
    }

    return paginationItems;
  };

  return (
    <>
      <ul className="inline-flex -space-x-px flex-row justify-center text-sm pt-2">
        <li>
          <button
            onClick={() => onClick(currentPage - 1)}
            className="text-xs py-2.5 px-4 border-l border-t border-b font-bold bg-white text-neutral-800 hover:bg-neutral-300 hover:text-neutral-950 disabled:opacity-50"
            
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {renderPagination()}
        <li>
          <button
            onClick={() => onClick(currentPage + 1)}
            className="text-xs py-2.5 px-4 border-r border-t border-b font-bold bg-white text-neutral-800 hover:bg-neutral-300 hover:text-neutral-950 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
}

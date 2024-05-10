'use client';

export default function Button({}) {
  const fetchPosts = async ()  => {
    const fetchedPosts  = []
    console.log("AAA")
  }

  return (
    <button onClick={fetchPosts}>
      Filter
    </button>
  )
}
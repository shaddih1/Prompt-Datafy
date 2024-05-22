'use client'
import Link from 'next/link'
import { useState } from 'react'
import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import { FaArrowsRotate } from 'react-icons/fa6'

//style
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import Image from 'next/image'

const Gallery = ({ galleryItems }) => {
  const [gallery, setGallery] = useState(galleryItems)
  const [category, setCategory] = useState('all')

  // filter image by category
  const filterImages = (category) => {
    setCategory(category)
    setTimeout(() => {
      const galleryAlbums =
        category === 'all'
          ? galleryItems
          : galleryItems.filter((album) => album.category?.includes(category))
      setGallery(galleryAlbums)
    }, 300)
  }

  return (
    <section className="py-20 relative">
      <div className="container">
        <div>
          <ul className="filter-options flex flex-wrap justify-center gap-2">
            <li
              className={`inline-block ${category === 'all' ? 'active' : ''}`}
              onClick={() => filterImages('all')}
              data-group="all"
            >
              <Link href="">All</Link>
            </li>
            <li
              className={`inline-block ${category === 'web' ? 'active' : ''}`}
              onClick={() => filterImages('web')}
              data-group="web-design"
            >
              <Link href="">Web Design</Link>
            </li>
            <li
              className={`inline-block ${category === 'graphic' ? 'active' : ''
                }`}
              onClick={() => filterImages('graphic')}
              data-group="graphic-design"
            >
              <Link href="">Graphic Design</Link>
            </li>
            <li
              className={`inline-block ${category === 'illustrator' ? 'active' : ''
                }`}
              onClick={() => filterImages('illustrator')}
              data-group="illustrator"
            >
              <Link href="">Illustrator</Link>
            </li>
            <li
              className={`inline-block ${category === 'photography' ? 'active' : ''
                }`}
              onClick={() => filterImages('photography')}
              data-group="photography"
            >
              <Link href="">Photography</Link>
            </li>
          </ul>
        </div>
        <div
          id="gallery-wrapper"
          className="md:flex justify-center mx-auto mt-6"
        >
          <LightGallery
            plugins={[lgZoom, lgThumbnail]}
            mode="lg-fade"
            speed={500}
          >
            {(gallery ?? []).map((galleryItem, idx) => {
              return (
                <a
                  href={galleryItem.image.src.src}
                  key={idx}
                  className="lg:w-1/3 md:w-1/2 p-2 picture-item inline-block"
                  data-groups='["web-design"]'
                >
                  <div>
                    <div className="border p-2 rounded shadow">
                      <div className="overflow-hidden">
                        <Link
                          className="image-popup"
                          title={galleryItem.image.caption}
                          href=""
                        >
                          <Image
                            width={329}
                            height={185}
                            alt="portfolio"
                            src={galleryItem.image.src}
                            className="transition-all duration-500 origin-center hover:scale-[1.1]"
                          />
                        </Link>
                      </div>
                      <h5 className="text-base font-medium mt-6">
                        {galleryItem.title}
                      </h5>
                      <p className="text-slate-400 mt-2">
                        {galleryItem.description}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </LightGallery>
        </div>
        <div className="flex items-center justify-center mt-20">
          <Link
            href=""
            className="flex gap-2 items-center py-3 px-6 rounded text-white bg-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/25 focus:outline focus:outline-primary/50"
          >
            <FaArrowsRotate /> Load More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery

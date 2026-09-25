import rakshamWebSec from '../assets/Raksham_web_sec.png';
import phoneFirst from '../assets/Phone_first.png';
import phoneGuard from '../assets/Phone_gard_image.png';
import Section from './motion/Section';
import { ChevronLink } from './ui';

type TileProps = {
  name: string;
  tagline: string;
  img: string;
  alt: string;
  /** Soft indigo background, to vary the tile grid. */
  tinted?: boolean;
  wide?: boolean;
  showLinks: boolean;
};

/** Apple-style product tile: centred name + tagline + links, image underneath. */
const Tile = ({ name, tagline, img, alt, tinted = false, wide = false, showLinks }: TileProps) => (
  <article
    className={`group flex flex-col items-center text-center overflow-hidden rounded-3xl pt-12 md:pt-16 px-6 ${
      tinted ? 'bg-tile-accent' : 'bg-surface'
    } ${wide ? 'md:col-span-2' : ''}`}
  >
    <h3 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight">{name}</h3>
    <p className="mt-3 max-w-[34ch] text-lg md:text-xl text-body leading-snug">{tagline}</p>
    {showLinks && (
      <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
        <ChevronLink to="/products" className="text-link">Learn more</ChevronLink>
        <ChevronLink to="/contact" className="text-link">Book a demo</ChevronLink>
      </div>
    )}
    <img
      src={img}
      alt={alt}
      loading="lazy"
      className={`mt-10 w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
        wide ? 'max-w-full md:max-w-4xl' : 'h-[300px] md:h-[380px]'
      }`}
    />
  </article>
);

// On the Products page itself the 'Learn more' links would point back to the same page, so they're hidden there
const Products = ({ showLinks = true }: { showLinks?: boolean }) => {
  return (
    <Section id="products" className="bg-surface-2 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-6xl font-semibold text-ink tracking-tight">
          Three products. One system.
        </h2>
        <p className="mt-4 text-center text-lg md:text-xl text-muted">
          A web dashboard for managers, and apps for your staff and guards.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Tile
            wide
            name="Raksham Web"
            tagline="Every site, every shift, live on one dashboard."
            img={rakshamWebSec}
            alt="Raksham Web dashboard"
            showLinks={showLinks}
          />
          <Tile
            name="Staff App"
            tagline="Tasks, progress and attendance, right from the phone."
            img={phoneFirst}
            alt="Raksham Staff App on a phone"
            showLinks={showLinks}
          />
          <Tile
            tinted
            name="Guard App"
            tagline="Shifts, incidents and random sleep alerts that keep guards alert."
            img={phoneGuard}
            alt="Raksham Guard App on a phone"
            showLinks={showLinks}
          />
        </div>
      </div>
    </Section>
  );
};

export default Products;

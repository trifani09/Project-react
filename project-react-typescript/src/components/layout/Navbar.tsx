import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { cdn } from '../../lib/cdn';

export default function Navbar() {
  const { t } = useTranslation();

  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-primary text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <img
            src={cdn('chemtradeasia-new/tradeasia-logo-white.webp')}
            alt="Tradeasia Logo" width={150}
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCompanyOpen((prev) => !prev)}
              className="flex items-center gap-1 transition hover:text-secondary"
            >
              {t('menus.title_company')}
              <span className="text-xs">▾</span>
            </button>

            {isCompanyOpen && (
              <div className="absolute left-0 top-8 w-48 rounded-xl bg-white py-2 text-title shadow-xl">
                <a
                  href="/about-us"
                  className="block px-4 py-2 text-sm hover:bg-background"
                >
                  {t('menus.company.about')}
                </a>

                <a
                  href="/our-location"
                  className="block px-4 py-2 text-sm hover:bg-background"
                >
                  {t('menus.company.our_location')}
                </a>
              </div>
            )}
          </div>

          <a href="/products" className="transition hover:text-secondary">
            {t('menus.product')}
          </a>

          <a
            href="/market-insights"
            className="transition hover:text-secondary"
          >
            {t('menus.market_insight')}
          </a>

          <a href="/career" className="transition hover:text-secondary">
            {t('menus.career')}
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10"
          >
            <span className="text-lg">⌕</span>
          </button>

          <button
            type="button"
            aria-label="Language"
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10"
          >
            <span className="text-lg">◎</span>
          </button>

          <Button href="/login" variant="secondary">
            {t('menus.sign_in')}
          </Button>

          <Button
            href="/contact-us"
            variant="primary"
            className="bg-secondary border-secondary"
          >
            {t('menus.contact')}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 lg:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-primary px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <a href="/about-us" className="py-2">
              {t('menus.company.about')}
            </a>

            <a href="/our-location" className="py-2">
              {t('menus.company.our_location')}
            </a>

            <a href="/products" className="py-2">
              {t('menus.product')}
            </a>

            <a href="/market-insights" className="py-2">
              {t('menus.market_insight')}
            </a>

            <a href="/career" className="py-2">
              {t('menus.career')}
            </a>

            <div className="mt-3 flex flex-col gap-3">
              <Button href="/login" variant="secondary">
                {t('menus.sign_in')}
              </Button>

              <Button
                href="/contact-us"
                variant="primary"
                className="bg-secondary border-secondary"
              >
                {t('menus.contact')}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

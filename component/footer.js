import Image from "next/image";
import Link from "next/link";
import Subscription_Form from "./subscription-form";

export function Footer({}) {
  return (
    <>
      <footer className='py-25 bg-brand-color-6 footer'>
        <section className='container grid grid-cols-1 md:grid-cols-2  lg:grid-cols-[1fr_200px_200px_1fr] gap-10'>
          <div className="md:col-span-1 md:block flex flex-col items-center">
            <Image src='/logo.svg' alt='Logo' className='logo_img cover w-[200px] h-auto mb-[18px]' width={200} height={600} />
            <p className='font-normal mb-3'>Contactez-nous</p>
            <a className='font-bold mb-[18px] block text-xl' href='tel:+33187662512'>
              331 85 53 09 78
            </a>
            <p className='font-normal text-[18px] mb-8'>
              58 rue de Monceau, 75008 Paris
            </p>
            <div className='flex items-center gap-4'>
              <Link href='/'>
                <svg className='size-[22px]' width='18' height='18' viewBox='0 0 18 18' fill='none'>
                  <path d='M17.7992 9.0541C17.7992 4.1635 13.8601 0.200195 8.99922 0.200195C4.13832 0.200195 0.199219 4.1635 0.199219 9.0541C0.199219 13.4739 3.41672 17.1358 7.62422 17.8002V11.6138H5.39012V9.053H7.62312V7.10269C7.62312 4.884 8.93762 3.6575 10.9484 3.6575C11.9098 3.6575 12.9174 3.8313 12.9174 3.8313V6.0093H11.8075C10.7141 6.0093 10.3742 6.69239 10.3742 7.3931V9.0541H12.8151L12.4246 11.6127H10.3742V17.8002C14.5817 17.1358 17.7992 13.4739 17.7992 9.0541Z' fill='white' />
                </svg>
              </Link>

              <Link href='/'>
                <svg className='size-[22px]' width='18' height='18' viewBox='0 0 18 18' fill='none'>
                  <path fillRule='evenodd' clipRule='evenodd' d='M12.5522 1.84147C11.6282 1.80077 11.3466 1.79087 8.99922 1.79087C6.64082 1.79087 6.37022 1.80187 5.43742 1.85137C4.58382 1.88107 4.12292 2.03177 3.80172 2.15167C3.42232 2.2905 3.07933 2.51352 2.79852 2.80397C2.50475 3.08829 2.27847 3.43486 2.13632 3.81817C2.01532 4.12837 1.87452 4.59037 1.83492 5.45277C1.78432 6.37677 1.78432 6.65727 1.78432 9.00577C1.78432 11.3532 1.79532 11.6348 1.83492 12.5577C1.83932 13.1187 1.94162 13.6753 2.13632 14.2022C2.29582 14.6037 2.48722 14.9051 2.79852 15.2065C3.10872 15.5167 3.39032 15.7081 3.81052 15.8687C4.33192 16.0623 4.88192 16.1635 5.43742 16.169C6.37022 16.2196 6.65072 16.2196 8.99922 16.2196C11.3466 16.2196 11.6282 16.2086 12.5522 16.169C13.4146 16.1294 13.8755 15.9886 14.1868 15.8687C14.5982 15.7081 14.8996 15.5068 15.1999 15.2065C15.5112 14.8952 15.6916 14.6037 15.8621 14.1923C16.0568 13.6687 16.1591 13.1154 16.1635 12.5577C16.2042 11.6337 16.2141 11.3532 16.2141 9.00467C16.2141 6.65727 16.2031 6.37567 16.1536 5.45277C16.1239 4.59037 15.9732 4.12837 15.8522 3.80827C15.7135 3.42848 15.4905 3.0851 15.1999 2.80397C14.9136 2.51373 14.5685 2.28796 14.1879 2.14177C13.8755 2.02077 13.4157 1.88107 12.5522 1.84147ZM5.36592 0.255271C6.30862 0.215671 6.61002 0.205771 8.99812 0.205771C10.2081 0.190371 11.4203 0.206871 12.6303 0.255271C13.3607 0.270671 14.0834 0.409271 14.7676 0.666671C15.3528 0.889267 15.8833 1.23516 16.323 1.68087C16.774 2.11757 17.1238 2.64887 17.346 3.23627C17.599 3.92047 17.7354 4.64317 17.7475 5.37247C17.7992 6.31627 17.7992 6.60667 17.7992 9.00577C17.7992 11.3928 17.7882 11.6942 17.7486 12.627C17.709 13.5708 17.5583 14.2132 17.3372 14.7643C17.1172 15.3473 16.8158 15.8379 16.3252 16.3296C15.8868 16.7774 15.3555 17.1236 14.7687 17.3438C14.2077 17.5539 13.5642 17.7145 12.6314 17.7552C11.6887 17.7948 11.3972 17.8047 8.99922 17.8047C6.61112 17.8047 6.30972 17.7948 5.36702 17.7442C4.43312 17.7145 3.79182 17.5638 3.22972 17.3438C2.64727 17.1158 2.11787 16.7706 1.67432 16.3296C1.22841 15.8844 0.880028 15.3514 0.651319 14.7643C0.450019 14.2033 0.289419 13.5708 0.249819 12.627C0.209119 11.6953 0.199219 11.384 0.199219 9.00467C0.199219 6.62757 0.199219 6.32617 0.259719 5.37247C0.289419 4.43967 0.440119 3.79727 0.661219 3.23627C0.896053 2.6579 1.23959 2.1299 1.67322 1.68087C2.11683 1.23726 2.64653 0.889114 3.22972 0.657871C3.79072 0.456571 4.43202 0.294871 5.36592 0.255271ZM5.83562 5.54187C6.25322 5.11504 6.75133 4.77528 7.30112 4.54225C7.85091 4.30922 8.44146 4.18756 9.03859 4.1843C9.63572 4.18103 10.2276 4.29624 10.7799 4.52324C11.3322 4.75025 11.834 5.08455 12.2562 5.50679C12.6784 5.92903 13.0127 6.43082 13.2397 6.98312C13.4668 7.53543 13.582 8.12727 13.5787 8.7244C13.5754 9.32153 13.4538 9.91208 13.2207 10.4619C12.9877 11.0117 12.6479 11.5098 12.2211 11.9274C11.3712 12.7589 10.2276 13.2217 9.03859 13.2152C7.84957 13.2087 6.7111 12.7334 5.87032 11.8927C5.02955 11.0519 4.55433 9.91342 4.54783 8.7244C4.54133 7.53538 5.00408 6.39179 5.83562 5.54187ZM7.90582 11.45C8.62495 11.7478 9.43296 11.7478 10.1521 11.4499C10.8712 11.1521 11.4426 10.5807 11.7404 9.86157C12.0383 9.14244 12.0383 8.33443 11.7404 7.6153C11.4425 6.89618 10.8712 6.32484 10.152 6.02697C9.43289 5.72911 8.62488 5.72912 7.90575 6.027C7.18662 6.32488 6.61528 6.89624 6.31742 7.61537C6.01955 8.33451 6.01956 9.14251 6.31745 9.86164C6.61533 10.5808 7.18668 11.1521 7.90582 11.45ZM14.42 4.91377C14.3222 5.01164 14.206 5.08927 14.0781 5.14224C13.9502 5.1952 13.8132 5.22246 13.6748 5.22246C13.5364 5.22246 13.3993 5.1952 13.2714 5.14224C13.1436 5.08927 13.0274 5.01164 12.9295 4.91377C12.8317 4.8159 12.754 4.69972 12.7011 4.57185C12.6481 4.44398 12.6208 4.30693 12.6208 4.16852C12.6208 4.03012 12.6481 3.89306 12.7011 3.76519C12.754 3.63732 12.8317 3.52114 12.9295 3.42327C13.1272 3.22562 13.3952 3.11458 13.6748 3.11458C13.9543 3.11458 14.2224 3.22562 14.42 3.42327C14.6177 3.62092 14.7287 3.889 14.7287 4.16852C14.7287 4.44804 14.6177 4.71612 14.42 4.91377Z' fill='white' />
                </svg>
              </Link>

              <Link href='/'>
                <svg className='size-[22px]' width='22' height='22' viewBox='0 0 22 22' fill='none'>
                  <path d='M11.5621 1.87549H14.5761C14.5761 1.87549 14.4034 5.73649 18.7506 6.02029V9.00239C18.7506 9.00239 16.4252 9.14429 14.575 7.72859L14.6058 13.8952C14.606 14.9993 14.2787 16.0786 13.6653 16.9966C13.0518 17.9147 12.1799 18.6301 11.1597 19.0523C10.1395 19.4746 9.01705 19.5848 7.93426 19.3688C6.85148 19.1529 5.85708 18.6207 5.0769 17.8394C4.29672 17.0582 3.76584 16.063 3.55143 14.98C3.33701 13.8969 3.44872 12.7745 3.87239 11.7549C4.29607 10.7354 5.01268 9.86439 5.93154 9.25223C6.85039 8.64007 7.93019 8.31425 9.03429 8.31599H9.81309V11.3795C9.30504 11.2221 8.7603 11.229 8.25638 11.3992C7.75247 11.5693 7.31507 11.8941 7.00644 12.3273C6.6978 12.7604 6.53366 13.2799 6.53738 13.8117C6.54109 14.3436 6.71247 14.8607 7.02713 15.2895C7.34178 15.7183 7.78367 16.037 8.28991 16.2001C8.79615 16.3632 9.34094 16.3625 9.84675 16.198C10.3525 16.0335 10.7936 15.7137 11.1071 15.2841C11.4206 14.8544 11.5906 14.3369 11.5929 13.805L11.5621 1.87549Z' fill='white' />
                </svg>
              </Link>

              <Link href='/'>
                <svg className='size-[22px]' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M20.4688 5.4636C19.9454 6.24066 19.2911 6.92102 18.5351 7.4744C18.5351 7.5294 18.5351 7.6174 18.5571 7.7274L18.5791 7.9826C18.5763 10.1629 17.9267 12.2933 16.7123 14.1041C16.0891 15.0434 15.3379 15.8913 14.4804 16.6231C13.5564 17.3942 12.5012 17.993 11.3652 18.3908C9.75125 18.9678 8.02712 19.1702 6.32337 18.9825C4.61963 18.7947 2.98091 18.2219 1.53125 17.3073C1.90745 17.3293 2.20555 17.3513 2.44865 17.3513C4.26035 17.3513 5.87405 16.7991 7.28865 15.6947C6.47734 15.6696 5.69314 15.3969 5.04131 14.9132C4.38949 14.4295 3.90125 13.7579 3.64215 12.9887C4.22295 13.1295 4.83015 13.1064 5.39885 12.9216C4.52169 12.7496 3.73222 12.2764 3.16695 11.584C2.58652 10.8995 2.27284 10.0284 2.28365 9.131V9.098C2.79185 9.3642 3.36605 9.5072 4.02935 9.5402C3.50177 9.18958 3.0699 8.71298 2.77278 8.15352C2.47567 7.59405 2.32268 6.96935 2.32765 6.3359C2.32765 5.6627 2.48165 5.0104 2.82485 4.3581C3.7833 5.55862 4.98912 6.53858 6.36025 7.2313C7.76168 7.9415 9.29846 8.34463 10.8681 8.4138C10.7806 8.12683 10.7325 7.82932 10.725 7.5294C10.725 6.458 11.0991 5.5406 11.8625 4.7904C12.2289 4.41766 12.6681 4.12425 13.1527 3.92839C13.6373 3.73254 14.157 3.63843 14.6796 3.6519C15.2054 3.65227 15.7256 3.7602 16.2081 3.96904C16.6907 4.17788 17.1255 4.48323 17.4857 4.8663C18.356 4.70163 19.1902 4.38395 19.9496 3.928C19.672 4.83081 19.0644 5.59588 18.248 6.0708C19.0122 5.97362 19.7597 5.77305 20.4699 5.4746L20.4688 5.4636Z' fill='white' />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:block">
            <h4 className='font-bold text-[18px] text-brand-color-2 mb-8'>
              Solutions Sovita
            </h4>
            <Link className='font-normal transition-all duration-300 hover:text-brand-color-1 block text-white mb-[10px]' href='/create-site'>
              Création de site
            </Link>
            <Link className='font-normal transition-all duration-300 hover:text-brand-color-1 block text-white mb-[10px]' href='/local-seo'>
              Référencement Local
            </Link>
            <Link className='font-normal transition-all duration-300 hover:text-brand-color-1 block text-white mb-[10px]' href='/google-ads-manager'>
              Google Ads
            </Link>
            <Link className='font-normal transition-all duration-300 hover:text-brand-color-1 block text-white mb-[10px]' href='/google-business-profile'>
              Référencement Google Maps
            </Link>
            <Link className='font-normal transition-all duration-300 hover:text-brand-color-1 block text-white mb-[10px]' href='/seo'>
              Référencement Pages jaunes
            </Link>
            <Link className='font-normal transition-all duration-300 hover:text-brand-color-1 block text-white mb-[10px]' href='/tictok'>
              TikTok Shop
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className='font-bold text-[18px] text-brand-color-3 mb-8'> Informations </h4>
            <Link className='font-normal transition-all duration-300 hover:text-brand-color-1 block text-white mb-[10px]' href='/request-quote'>
              Prendre rendez-vous
            </Link>
            <Link className='font-normal transition-all duration-300 hover:text-brand-color-1 block text-white mb-[10px]' href='/request-quote'>
              Contactez nous
            </Link>
            <Link className='font-normal transition-all duration-300 hover:text-brand-color-1 block text-white mb-[10px]' href='/'>
              Mention legale
            </Link>
            <Link className='font-normal transition-all duration-300 hover:text-brand-color-1 block text-white mb-[10px]' href='/'>
              Conditions générales de ventes
            </Link>
          </div>

          <div className="md:col-span-1 md:block flex flex-col items-center">
            <h4 className='font-bold text-[18px] text-brand-color-3 mb-8 text-center md:text-left'>
              Newsletter
            </h4>
            <p className='mb-8 text-[14px] text-center md:text-left'>
              Recevez chaque semaine nos actus Social Média
            </p>
            <Subscription_Form/>
          </div>
        </section>
      </footer>

      <section className='copyright py-4 bg-brand-color-1'>
        <div className='container flex flex-col md:flex-row items-center justify-between '>
          <p className='font-sm font-normal text-white'>
             Copyright © 2025 SOVITA.agency  Tous droits réservés
          </p>
          <div className='flex items-center gap-2'>
            <Link className='font-sm font-normal block text-white' href='/privacy-policy'>
              Mention legale
            </Link>
            |
            <Link className='font-sm font-normal block text-white' href='/terms-of-use'>
              Conditions générales de ventes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingCoins } from "@/pages/api/data";
import AliceCarousel from "react-alice-carousel";
import Link from "next/link";
import Image from "next/image";

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

interface CryptoStateProps {
  currency: string;
  symbol: string;
}

const CryptoState = (): CryptoStateProps => ({
  currency: "usd",
  symbol: "$",
});

export function numberWithComas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel: React.FC = () => {
  const [trending, setTrending] = useState<Coin[]>([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = React.useCallback(async () => {
    try {
      const { data } = await axios.get(TrendingCoins(currency));
      setTrending(data);
    } catch (error) {
      console.error("Failed to fetch trending coins:", error);
    }
  }, [currency]);

  useEffect(() => {
    fetchTrendingCoins();
  }, [fetchTrendingCoins]);

  const items = trending.map((coin) => {
    const profit = coin.price_change_percentage_24h >= 0;

    return (
      <Link
        key={coin.id}
        href={`/coin/${coin.id}`}
        className="flex flex-col items-center text-center text-white hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <Image
          src={coin?.image}
          alt={coin.name}
          width={80}
          height={80}
          className="mb-2"
        />

        <span className="uppercase text-sm font-medium">
          {coin.symbol}&nbsp;
          <span
            className={`font-bold ${
              profit ? "text-green-500" : "text-red-500"
            }`}
          >
            {profit && "+"} {coin.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>

        <span className="text-lg font-semibold">
          {symbol} {numberWithComas(coin?.current_price)}
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="flex items-center justify-center bg-transparent h-64 p-4">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;

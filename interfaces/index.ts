export interface Coffee {
  id:number|string;
  image: string;
  rating: string;
  title: string;
  subtitle: string;
  price: string;
  description?: string,
  category?:string,
  ingredients?:string[],
  ppreparationTimere?: string
}

export interface CoffeeCardProps {
  coffee: Coffee;
}

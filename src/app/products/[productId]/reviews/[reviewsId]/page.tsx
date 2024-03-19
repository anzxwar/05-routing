type Props = {
    params: {
          productId: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
          <h1>Review from {params.reviewsId}</h1>
    )
  }
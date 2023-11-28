import ListingProfile from "../../layouts/listing-profile/listing-profile";

interface PageProps {
  params: {
    listing_name: string;
  };
}

export default function ListingPage({ params }: PageProps): JSX.Element {
  return (
    <main>
      Listing {params.listing_name}
      <ListingProfile listingName={params.listing_name} />
    </main>
  );
}

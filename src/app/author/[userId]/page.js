import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import AuthorDetails from "@/components/Author/AuthorDetails";
import getUserById from "@/actions/getUserById";

import UserListing from "@/components/Author/UserListing";
import { getCurrentUser } from "@/actions/getCurrentUser";

const page = async ({ params }) => {
	// const user = await getUserById(params);
	const currentUser = await getCurrentUser();
	const user = await getUserById({ userId: `${currentUser.id}` });
	// console.log(user.id, "user", currentUser.id, "currentUser")
	
	return (
		<>
			<PageBanner pageTitle="Author's Details" />
			<AuthorDetails user={user} />
			<UserListing
				listings={user?.listings && user.listings}
				user={user}
				currentUser={currentUser}
				params={params}
			/>
		</>
	);
};

export default page;

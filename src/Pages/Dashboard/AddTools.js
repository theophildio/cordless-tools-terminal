import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from '../../firebase.config';

const AddTools = () => {
  const [user] = useAuthState(auth);
  const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm();

  const imgStorageKey = '178176aaaa274d2b6409cb0a2dda70b2';
  
  const onSubmit = async data => {
    const image = data.image[0];
		const formData = new FormData();
		formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
		fetch(url, {
			method: 'POST',
			body: formData
		})
    .then(res => res.json())
    .then(result => {
      if(result.success) {
        const imgUrl = result.data.url;
        const toolname = data.name;
        const email = user?.email;
        const price = data.price;
        const quantity = parseInt(data.quantity);
        const description = data.detail;
        const img = imgUrl;
        const addTool = {
          toolname,
          email,
          price,
          quantity,
          description,
          img,
        };
        // Send to Database
        fetch('https://cordless-tools-terminal.herokuapp.com/tool/additem', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(addTool)
        })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged) {
            toast.success('New Tool added successful.');
            reset();
          } else {
            toast.error('Failed to add new Tool!!');
          }
        })
      }
    })
    
}

	return (
		<div className="w-4/5 mx-auto py-6">
			<h2 className="text-2xl font-semibold text-center capitalize">Add Tool</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 mx-auto">
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">Tool Name</span>
					</label>
					<input
						{...register("name", {
							required: {
								value: true,
								message: "Tool name is required.",
							},
						})}
						type="text"
            name="name"
						className="input input-bordered w-full"
					/>
					<label className="label">
						{errors.name?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.name.message}
							</span>
						)}
					</label>
				</div>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">Tool Price</span>
					</label>
					<input
						{...register("price", {
							required: {
								value: true,
								message: "Tool price is required.",
							},
						})}
						type="number"
            name="price"
						className="input input-bordered w-full"
					/>
					<label className="label">
						{errors.price?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.price.message}
							</span>
						)}
					</label>
				</div>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">Tool Quantity</span>
					</label>
					<input
						{...register("quantity", {
							required: {
								value: true,
								message: "Tool quantity is required.",
							},
						})}
						type="number"
            name="quantity"
						className="input input-bordered w-full"
					/>
					<label className="label">
						{errors.quantity?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.quantity.message}
							</span>
						)}
					</label>
				</div>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">Tool Description</span>
					</label>
					<textarea
						{...register("detail", {
							required: {
								value: true,
								message: "Product description is required.",
							},
						})}
						type="text"
            name="detail"
						className="textarea textarea-bordered w-full"
					/>
					<label className="label">
						{errors.detail?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.detail.message}
							</span>
						)}
					</label>
				</div>
        <div className="form-control w-full">
					<label className="label">
						<span className="label-text">Tool Image</span>
					</label>
					<input
						{...register("image", {
							required: {
								value: true,
								message: "Tool image is required.",
							},
						})}
						type="file"
            name="image"
            placeholder="Image url"
						className="w-full"
					/>
					<label className="label">
						{errors.image?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.image.message}
							</span>
						)}
					</label>
				</div>
				<input
					type="submit"
					value="Add Now"
					className="input bg-neutral text-base-100 uppercase cursor-pointer w-full input-bordered"
				/>
			</form>
		</div>
	);
};

export default AddTools;
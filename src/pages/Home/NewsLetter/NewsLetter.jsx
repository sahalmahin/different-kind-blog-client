const NewsLetter = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = event.target;
        const email = form.email.value;
        console.log(email);
    }

    return (
        <div className="my-60">
            <h3 className="text-5xl font-bold text-center">News Letter</h3>
            <div className="flex items-center justify-center mt-16">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <input type="email" name='email' placeholder="Type your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;
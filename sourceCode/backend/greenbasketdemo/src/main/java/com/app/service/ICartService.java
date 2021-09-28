package com.app.service;

import com.app.pojos.Cart;
import com.app.pojos.ProductDetails;

public interface ICartService {
	
	public Cart addCartAndProductFirstTime(Long productid,double quantity,Long custId);
	
	public Cart updateExistingCart(Long productid,double quantity,Long custID);
<<<<<<< HEAD
	public Boolean deleteFormExistingCard(Long productid, double quantity,Long custID);
=======
	public Boolean deleteFormExistingCard(Long productid, Long custID);

	public Cart getCutomersCart(Long custID);
<<<<<<< HEAD
>>>>>>> parent of cd632fb (code after cartByCustomerId method)
=======
>>>>>>> parent of cd632fb (code after cartByCustomerId method)

}

def find_products(categories, budget, interests):
    from bs4 import BeautifulSoup
    import requests
    import pprint

    products = []

    if interests:
        new_categories = [] 
        # Adds user interests to categories
        for category in categories:
            for interest in interests:
                new_categories.append(category)
                new_categories.append(interest + " " + category)

        categories = new_categories

    else:
        print("no interests")

    for category in categories:
        website = "https://www.google.com/search?q=" + category + "&rlz=1C1CHBF_enCA804CA804&sxsrf=ALeKk03zhH9smm0Z5P4KhOirP2fiJuKoMA:1628304243038&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjz2vf_8Z3yAhULv54KHfDzB3QQ_AUoAnoECAIQBA&biw=1536&bih=750"

        headers = {
            'User-agent':
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19582"
        }

        source = requests.get(website, headers=headers)
        soup = BeautifulSoup(source.content, 'html.parser')
        divs = soup.find_all("div")

        for div in divs:
            try:
                if div.has_attr('class') and div.get("class")[0] == "sh-dgr__gr-auto":
                    product_name = div.find("h4", class_="A2sOrd").text

                    product_price = div.find("span", class_="a8Pemb").text
                    
                    product_img = div.find("img").get("src")

                    price = product_price.replace("$", "").replace(",", "")
    
                    if float(price) <= float(budget): # Product is within our budget
                        product_url = "https://www.google.com" + div.find("a", class_="xCpuod").get("href")
                        about_product = [product_name, product_price, product_url, product_img]
                        
                        about_product = {
                            "name": product_name,
                            "price": product_price,
                            "url": product_url,
                        }

                        products.append(about_product)
            except:
                pass


    return products
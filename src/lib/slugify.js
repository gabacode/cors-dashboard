const slugify = (string) => string.toLowerCase().replace(" ", "-").replace(" ", "-").replace("'", "-").replace("à","a").replace("è","e").replace("ì","i").replace("ò","o").replace("ù","u")
export default slugify
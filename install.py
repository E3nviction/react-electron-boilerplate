import json

def main():
	print("Welcome to the react-electron-boilerplate install script")

	name = input("	-> Enter your project name: ")
	productname = input("	-> Enter your project product name: ")
	description = input("	-> Enter your project description: ")
	version = input("	-> Enter your project version: ")


	with open("package.json", "r") as f:
		data = json.load(f)

	data["name"] = name
	data["productName"] = productname
	data["description"] = description
	data["version"] = version

	with open("package.json", "w") as f:
		json.dump(data, f, indent=4)

	print("	<- Package.json updated.")

	print("	-> Running npm install...")
	
	import subprocess
	subprocess.run(["npm", "install"])

	print("<- Done.")

	print("<- Installation complete.")

if __name__ == "__main__":
	main()
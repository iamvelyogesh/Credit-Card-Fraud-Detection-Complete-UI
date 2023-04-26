# HacktoFuture

#Introduction
We are glad and honoured to participate in the event HacktoFuture.This Project is under the Theme of Finance and our problem statement is credit card transaction fraud detection.
It involves detecting  fraudulent transactions that results in financial losses for both the credit card issuer and the cardholder.
By identifying and preventing fraudulent transactions, financial institutions can protect their customers' funds and maintain the trust of their customers. This helps to ensure the overall stability of the financial system, which is essential for a healthy economy. Thus, credit card transaction fraud detection plays a critical role in the finance industry by reducing financial losses and maintaining the integrity of the financial system.



#Development
1.ML Credit card
To train a machine learning model for anomaly detection using Random Forest, we preprocess the dataset by cleaning and transforming the data into a suitable format. The next step involves feature engineering, where we select the relevant input features and transform them into a suitable form for the algorithm. Random Forest can handle both categorical and numerical data, so we need to ensure that the features are appropriately encoded to avoid any biases.

After preprocessing and feature engineering, we split the dataset into training and testing sets to evaluate the performance of the model. We then train the Random Forest algorithm on the training set and optimize the hyperparameters, such as the number of trees and the maximum depth of the trees.

Once we have trained the model, we evaluate its performance on the testing set by computing metrics such as precision, recall, and F1-score. These metrics give us an idea of how well the model is detecting anomalous transactions.

If the performance is not satisfactory, we can further tune the hyperparameters and adjust the feature selection to improve the model's performance. Once the model is trained and optimized, we can use it to detect anomalies in new credit card transactions and prevent financial losses due to fraud.

In summary, training a machine learning model for anomaly detection using Random Forest involves preprocessing and transforming the data, feature engineering, hyperparameter tuning, and evaluation of the model's performance. By following these steps, we can develop an effective model that can detect anomalous transactions and help prevent financial losses due to fraud.



2.Url Checker
We had developed URL checker using React JS without using an API, we can use regular expressions to check whether the URL is safe or malicious. We can create a function that takes in the URL as input and uses regular expressions to extract the domain name and other components of the URL.

Once we have extracted the domain name, we can compare it to a list of known malicious domains. We can create a list of malicious domains that we have gathered from various sources, such as blacklists and threat intelligence feeds. If the domain name matches a known malicious domain, we can flag the URL as unsafe.

In addition to checking the domain name, we can also check the length of the URL, the presence of special characters, and the use of certain keywords. These features can be indicative of malicious intent, and we can use regular expressions to detect them.

Once we have performed all the checks, we can display the result to the user in the form of a message or a notification. If the URL is safe, we can display a green message indicating that it is safe to visit.



3.credit score calculator

The inputs  include factors such as the individual's name , individual's age , city ,income ,loan amount , loan type. These factors are weighted differently depending on the credit scoring model being used, so we need to take this into account when building the calculator.

Once we have defined the inputs, we can create a form component in React that allows the user to input their relevant information, such as their credit card balances, payment history, and length of credit history. We can use form validation to ensure that the input is in the correct format.

Next, we need to calculate the credit score based on the inputs provided by the user. We can use a predefined credit scoring model, such as the FICO score or VantageScore, to calculate the score. We can create a function that takes in the input values and applies the relevant weights to calculate the score.

Once we have calculated the credit score, we can display it to the user in the form of a message or a visual indicator, such as a progress bar. We can also provide some context on what the credit score means and how it compares to other scores.


4.ESPIAL
Our main Home Page which has been developed using React Js



#Screenshots
![Screenshot (1267)](https://user-images.githubusercontent.com/113898735/234447134-06a89acb-764f-4847-bab3-96c5dd52245f.png)


![Screenshot (1269)](https://user-images.githubusercontent.com/113898735/234447324-e275171d-013f-4806-9f89-c136c23eefba.png)


![Screenshot (1272)](https://user-images.githubusercontent.com/113898735/234447343-83887926-cf77-4d12-a9ce-e972c2185843.png)


![Screenshot (1275)](https://user-images.githubusercontent.com/113898735/234447358-bf655b71-c1de-4cd0-ab14-92653eb27037.png)


![Screenshot (1276)](https://user-images.githubusercontent.com/113898735/234447364-6367a2c4-3683-4b43-b0de-c6a814067872.png)


![Screenshot (1277)](https://user-images.githubusercontent.com/113898735/234447370-257d473a-d27e-4a49-9f3d-b6d1169f49ad.png)


![Screenshot (1278)](https://user-images.githubusercontent.com/113898735/234447380-46835e68-3b9c-498e-a9c5-a57744b58176.png)


![Screenshot (1279)](https://user-images.githubusercontent.com/113898735/234447386-2997c01f-c2a8-4d08-a69f-315806250e71.png)


![Screenshot (1280)](https://user-images.githubusercontent.com/113898735/234447394-470afdda-9c44-4072-99c2-17770e1298ff.png)


![Screenshot (1281)](https://user-images.githubusercontent.com/113898735/234447402-89a33dbf-608b-49c7-b1e3-89068b249b6f.png)

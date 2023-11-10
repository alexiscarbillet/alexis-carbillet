package com.appac.calculator;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private TextView resultTextView;
    private double operand1 = 0;
    private double operand2 = 0;
    private String operator = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        resultTextView = findViewById(R.id.resultTextView);

        Button button1 = findViewById(R.id.button1);
        Button button2 = findViewById(R.id.button2);
        Button button3 = findViewById(R.id.button3);
        Button button4 = findViewById(R.id.button4);
        Button button5 = findViewById(R.id.button5);
        Button button6 = findViewById(R.id.button6);
        Button button7 = findViewById(R.id.button7);
        Button button8 = findViewById(R.id.button8);
        Button button9 = findViewById(R.id.button9);
        Button button0 = findViewById(R.id.button0);
        Button buttonPlus = findViewById(R.id.buttonPlus);
        Button buttonEquals = findViewById(R.id.buttonEquals);
        Button buttonReset = findViewById(R.id.buttonReset);
        Button buttonSubtract = findViewById(R.id.buttonSubtract);
        Button buttonMultiply = findViewById(R.id.buttonMultiply);
        Button buttonDivide = findViewById(R.id.buttonDivide);
        Button buttonModulus = findViewById(R.id.buttonModulus);
        Button buttonFactorial = findViewById(R.id.buttonFactorial);
        Button buttonInverse = findViewById(R.id.buttonInverse);
        Button buttonTenPowerX = findViewById(R.id.buttonTenPowerX);

        buttonTenPowerX.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                calculateTenPowerX();
            }
        });

        buttonInverse.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                calculateInverse();
            }
        });

        buttonFactorial.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                calculateFactorial();
            }
        });

        buttonModulus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleOperatorClick("%");
            }
        });

        buttonMultiply.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleOperatorClick("*");
            }
        });

        buttonDivide.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleOperatorClick("/");
            }
        });

        buttonSubtract.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleOperatorClick("-");
            }
        });

        buttonReset.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                resetCalculator();
            }
        });

        button1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleNumberClick(1);
            }
        });

        button2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleNumberClick(2);
            }
        });

        button3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleNumberClick(3);
            }
        });

        button4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleNumberClick(4);
            }
        });

        button5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleNumberClick(5);
            }
        });

        button6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleNumberClick(6);
            }
        });

        button7.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleNumberClick(7);
            }
        });

        button8.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleNumberClick(8);
            }
        });

        button9.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleNumberClick(9);
            }
        });

        button0.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleNumberClick(0);
            }
        });

        buttonPlus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleOperatorClick("+");
            }
        });

        buttonEquals.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                calculateResult();
            }
        });
    }

    private void resetCalculator() {
        operand1 = 0;
        operand2 = 0;
        operator = "";
        updateResultText();
    }

    private void calculateInverse() {
        if (operand1 != 0) {
            double result = 1.0 / operand1;
            resultTextView.setText("Result: " + result);
            operand1 = result;
            operator = "";
            operand2 = 0;
        } else {
            resultTextView.setText("Result: Error");
        }
    }

    private void calculateTenPowerX() {
        double result = Math.pow(10, operand1);
        resultTextView.setText("Result: " + result);
        operand1 = result;
        operator = "";
        operand2 = 0;
    }

    private void handleNumberClick(int number) {
        if (operator.isEmpty()) {
            operand1 = operand1 * 10 + number;
        } else {
            operand2 = operand2 * 10 + number;
        }
        updateResultText();
    }

    private void handleOperatorClick(String op) {
        // If the operator is not empty, calculate the result first.
        if (!operator.isEmpty()) {
            calculateResult();
        }

        operator = op;
        updateResultText();
    }

    private void calculateFactorial() {
        if (operand1 >= 0) {
            int result = 1;
            for (int i = 1; i <= operand1; i++) {
                result *= i;
            }
            resultTextView.setText("Result: " + result);
            operand1 = result;
            operator = "";
            operand2 = 0;
        } else {
            resultTextView.setText("Result: Error");
        }
    }


    private void calculateResult() {
        double result = 0;

        if (operator.equals("+")) {
            result = operand1 + operand2;
        } else if (operator.equals("-")) {
            result = operand1 - operand2;
        } else if (operator.equals("*")) {
            result = operand1 * operand2;
        } else if (operator.equals("/")) {
            // Check for division by zero to avoid crashes.
            if (operand2 != 0) {
                result = operand1 / operand2;
            } else {
                // Handle division by zero error as needed.
                resultTextView.setText("Result: Error");
                return;
            }
        } else if (operator.equals("%")) {
            // Calculate the modulus.
            result = operand1 % operand2;
        }

        resultTextView.setText("Result: " + result);

        // Reset the calculator state after displaying the result.
        operand1 = result;
        operand2 = 0;
        operator = "";
    }


    private void updateResultText() {
        String resultText = "Result: ";
        if (operand1 != 0) {
            resultText += operand1;
            if (!operator.isEmpty()) {
                resultText += " " + operator;
                if (operand2 != 0) {
                    resultText += " " + operand2;
                }
            }
        }
        resultTextView.setText(resultText);
    }
}



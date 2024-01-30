package com.app.acwifiobservability;

import android.content.Context;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Process;
import android.widget.TextView;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private TextView ssidTextView, bssidTextView, ipAddressTextView, linkSpeedTextView;
    private TextView cpuUsageTextView, memoryUsageTextView, temperatureTextView;
    private WifiManager wifiManager;
    private Handler handler;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Initialize UI components
        ssidTextView = findViewById(R.id.ssidTextView);
        bssidTextView = findViewById(R.id.bssidTextView);
        ipAddressTextView = findViewById(R.id.ipAddressTextView);
        linkSpeedTextView = findViewById(R.id.linkSpeedTextView);

        cpuUsageTextView = findViewById(R.id.cpuUsageTextView);
        memoryUsageTextView = findViewById(R.id.memoryUsageTextView);
        temperatureTextView = findViewById(R.id.temperatureTextView);

        // Initialize WifiManager
        wifiManager = (WifiManager) getApplicationContext().getSystemService(Context.WIFI_SERVICE);

        // Initialize Handler for periodic updates
        handler = new Handler();
        startRepeatingTask();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        stopRepeatingTask();
    }

    Runnable runnable = new Runnable() {
        @Override
        public void run() {
            updateWifiInfo();
            updateResourceInfo();
            handler.postDelayed(this, 20000); // 20 seconds delay
        }
    };

    void startRepeatingTask() {
        handler.postDelayed(runnable, 0);
    }

    void stopRepeatingTask() {
        handler.removeCallbacks(runnable);
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    private void updateResourceInfo() {
        // CPU Usage
        double cpuUsage = ProcessCpuTracker.getCpuUsage();
        cpuUsageTextView.setText("Phone CPU Usage: " + cpuUsage + "%");

        // Memory Usage
        long totalMemory = Runtime.getRuntime().totalMemory();
        long freeMemory = Runtime.getRuntime().freeMemory();
        long usedMemory = totalMemory - freeMemory;
        memoryUsageTextView.setText("Phone Memory Usage: " + usedMemory / (1024 * 1024) + " MB");

        // Temperature (Note: Temperature monitoring may not be available on all devices)
        float temperature = BatteryTemperature.getBatteryTemperature(getApplicationContext());
        temperatureTextView.setText("Battery Temperature: " + temperature + " °C");
    }

    private void updateWifiInfo() {
        WifiInfo wifiInfo = wifiManager.getConnectionInfo();

        String ssid = wifiInfo.getSSID();
        String bssid = wifiInfo.getBSSID();
        int ipAddress = wifiInfo.getIpAddress();
        int linkSpeed = wifiInfo.getLinkSpeed();

        // Update TextViews
        ssidTextView.setText("WIFI SSID: " + ssid);
        bssidTextView.setText("WIFI BSSID: " + bssid);
        ipAddressTextView.setText("WIFI IP Address: " + formatIpAddress(ipAddress));
        linkSpeedTextView.setText("WIFI Link Speed: " + linkSpeed + " Mbps");
    }
    private String formatIpAddress(int ipAddress) {
        // Format the IP address obtained from wifiInfo.getIpAddress()
        return String.format("%d.%d.%d.%d",
                (ipAddress & 0xff),
                (ipAddress >> 8 & 0xff),
                (ipAddress >> 16 & 0xff),
                (ipAddress >> 24 & 0xff));
    }
}

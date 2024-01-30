package com.app.acwifiobservability;

import android.os.Process;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ProcessCpuTracker {

    public static double getCpuUsage() {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("/proc/stat"));
            String line = reader.readLine();
            reader.close();

            String[] tokens = line.split("\\s+");
            long idle1 = Long.parseLong(tokens[4]);
            long total1 = Long.parseLong(tokens[1]) + Long.parseLong(tokens[2]) + Long.parseLong(tokens[3])
                    + Long.parseLong(tokens[4]) + Long.parseLong(tokens[6]) + Long.parseLong(tokens[5])
                    + Long.parseLong(tokens[7]);

            Thread.sleep(1000);

            reader = new BufferedReader(new FileReader("/proc/stat"));
            line = reader.readLine();
            reader.close();

            tokens = line.split("\\s+");
            long idle2 = Long.parseLong(tokens[4]);
            long total2 = Long.parseLong(tokens[1]) + Long.parseLong(tokens[2]) + Long.parseLong(tokens[3])
                    + Long.parseLong(tokens[4]) + Long.parseLong(tokens[6]) + Long.parseLong(tokens[5])
                    + Long.parseLong(tokens[7]);

            return ((total2 - total1) - (idle2 - idle1)) * 100.0 / (total2 - total1);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return 0.0;
        }
    }
}

